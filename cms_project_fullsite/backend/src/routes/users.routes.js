const router = require("express").Router();
const asyncHandler = require("../utils/asyncHandler");
const c = require("../controllers/users.controller");
const { requireAdmin } = require("../middlewares/auth");

// admin only (management)
router.get("/", requireAdmin, asyncHandler(c.list));
router.get("/:id", requireAdmin, asyncHandler(c.get));
router.post("/", requireAdmin, asyncHandler(c.create));
router.put("/:id", requireAdmin, asyncHandler(c.update));
router.delete("/:id", requireAdmin, asyncHandler(c.remove));

module.exports = router;
