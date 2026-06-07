const express = require("express");

// Import routes
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const profileRoutes = require("./profile.routes");
const aboutRoutes = require("./about.routes");
const socialRoutes = require("./social.routes");
const projectRoutes = require("./project.routes");
const skillRoutes = require("./skill.routes");
const experienceRoutes = require("./experience.routes");
const educationRoutes = require("./education.routes");
const contactRoutes = require("./contact.routes");
const settingsRoutes = require("./settings.routes");

const router = express.Router();

// Mount routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/profile", profileRoutes);
router.use("/about", aboutRoutes);
router.use("/social", socialRoutes);
router.use("/projects", projectRoutes);
router.use("/skills", skillRoutes);
router.use("/experience", experienceRoutes);
router.use("/education", educationRoutes);
router.use("/contacts", contactRoutes);
router.use("/settings", settingsRoutes);

module.exports = router;
