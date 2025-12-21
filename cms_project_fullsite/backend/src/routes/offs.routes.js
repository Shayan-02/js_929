const router = require("express").Router();
const asyncHandler = require("../utils/asyncHandler");
const c = require("../controllers/offs.controller");
const { requireAdmin } = require("../middlewares/auth");

router.get("/", requireAdmin, asyncHandler(c.list));
router.put("/:id/toggle", requireAdmin, asyncHandler(c.toggle));
router.delete("/:id", requireAdmin, asyncHandler(c.remove));

module.exports = router;
