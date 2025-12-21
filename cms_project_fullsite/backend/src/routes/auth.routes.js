const router = require("express").Router();
const asyncHandler = require("../utils/asyncHandler");
const c = require("../controllers/auth.controller");
const { requireAuth } = require("../middlewares/auth");

router.post("/register", asyncHandler(c.register));
router.post("/login", asyncHandler(c.login));
router.get("/me", requireAuth, asyncHandler(c.me));

module.exports = router;
