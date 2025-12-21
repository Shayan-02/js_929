const router = require("express").Router();
const asyncHandler = require("../utils/asyncHandler");
const c = require("../controllers/comments.controller");
const { requireAdmin } = require("../middlewares/auth");

router.get("/", requireAdmin, asyncHandler(c.list));
router.delete("/:id", requireAdmin, asyncHandler(c.remove));

module.exports = router;
