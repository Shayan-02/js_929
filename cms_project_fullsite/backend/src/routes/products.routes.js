const router = require("express").Router();
const asyncHandler = require("../utils/asyncHandler");
const c = require("../controllers/products.controller");
const { requireAdmin } = require("../middlewares/auth");

// public
router.get("/", asyncHandler(c.list));
router.get("/:id", asyncHandler(c.get));

// admin only
router.post("/", requireAdmin, asyncHandler(c.create));
router.put("/:id", requireAdmin, asyncHandler(c.update));
router.delete("/:id", requireAdmin, asyncHandler(c.remove));

module.exports = router;
