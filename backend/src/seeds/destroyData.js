const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load env vars
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

// Load models
const User = require("../../models/User");
const Profile = require("../../models/Profile");
const About = require("../../models/About");
const SocialLink = require("../../models/SocialLink");
const Project = require("../../models/Project");
const Skill = require("../../models/Skill");
const Experience = require("../../models/Experience");
const Education = require("../../models/Education");
const Contact = require("../../models/Contact");
const Setting = require("../../models/Setting");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {});

// Delete data
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Profile.deleteMany();
    await About.deleteMany();
    await SocialLink.deleteMany();
    await Project.deleteMany();
    await Skill.deleteMany();
    await Experience.deleteMany();
    await Education.deleteMany();
    await Contact.deleteMany();
    await Setting.deleteMany();

    console.log("Data Destroyed Successfully...");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

destroyData();
