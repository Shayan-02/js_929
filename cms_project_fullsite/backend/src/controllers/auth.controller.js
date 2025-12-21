const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../services/users.service");
const { secret, expiresIn } = require("../config/jwt");

function sign(user){
  return jwt.sign(
    { id: user.id, username: user.username, isAdmin: !!user.isAdmin },
    secret,
    { expiresIn }
  );
}

async function register(req, res){
  const { firstname, lastname, username, password, phone, email } = req.body;
  if(!firstname || !lastname || !username || !password){
    return res.status(400).send("firstname/lastname/username/password required");
  }

  const existing = await users.getByUsername(username);
  if(existing) return res.status(409).send("username already exists");

  const hash = bcrypt.hashSync(password, 10);
  const id = await users.create({
    firstname, lastname, username,
    password: hash,
    phone: phone || null,
    email: email || null,
    isAdmin: 0
  });

  const user = await users.getById(id);
  res.status(201).json({ token: sign(user), user: { id: user.id, username: user.username, isAdmin: !!user.isAdmin } });
}

async function login(req, res){
  const { username, password } = req.body;
  if(!username || !password) return res.status(400).send("username/password required");

  const user = await users.getByUsername(username);
  if(!user) return res.status(401).send("invalid credentials");

  const ok = bcrypt.compareSync(password, user.password);
  if(!ok) return res.status(401).send("invalid credentials");

  res.json({ token: sign(user), user: { id: user.id, username: user.username, isAdmin: !!user.isAdmin } });
}

async function me(req, res){
  res.json({ user: req.user });
}

module.exports = { register, login, me };
