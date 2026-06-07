const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

// Load models
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const About = require('../../models/About');
const SocialLink = require('../../models/SocialLink');
const Project = require('../../models/Project');
const Skill = require('../../models/Skill');
const Experience = require('../../models/Experience');
const Education = require('../../models/Education');
const Contact = require('../../models/Contact');
const Setting = require('../../models/Setting');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {});

// Read JSON files
const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf-8'));
const profiles = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'profiles.json'), 'utf-8'));
const about = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'about.json'), 'utf-8'));
const sociallinks = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'sociallinks.json'), 'utf-8'));
const projects = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'projects.json'), 'utf-8'));
const skills = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'skills.json'), 'utf-8'));
const experience = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'experience.json'), 'utf-8'));
const education = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'education.json'), 'utf-8'));
const contacts = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'contacts.json'), 'utf-8'));
const settings = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'settings.json'), 'utf-8'));

// Import into DB
const importData = async () => {
  try {
    await User.create(users);
    await Profile.create(profiles);
    await About.create(about);
    await SocialLink.create(sociallinks);
    await Project.create(projects);
    await Skill.create(skills);
    await Experience.create(experience);
    await Education.create(education);
    await Contact.create(contacts);
    await Setting.create(settings);

    console.log('Data Imported Successfully...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
