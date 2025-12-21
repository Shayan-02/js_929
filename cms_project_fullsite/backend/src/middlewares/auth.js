const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

function getToken(req){
  const h = req.headers.authorization || "";
  if(h.startsWith("Bearer ")) return h.slice(7);
  return null;
}

function requireAuth(req, res, next){
  const token = getToken(req);
  if(!token) return res.status(401).send("Unauthorized");
  try{
    req.user = jwt.verify(token, secret);
    next();
  }catch(e){
    return res.status(401).send("Unauthorized");
  }
}

function requireAdmin(req, res, next){
  requireAuth(req, res, ()=>{
    if(!req.user?.isAdmin) return res.status(403).send("Forbidden");
    next();
  });
}

module.exports = { requireAuth, requireAdmin };
