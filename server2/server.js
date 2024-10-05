const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const mustFields = [
  "intro_name",
  "intro_para",
  "hard_skills_list",
  "soft_skills_list",
  "projects_list",
  "degree_heading",
  "certificate_images",
  "pic2",
];

app.post("/api/profiles", (req, res) => {
  const profileData = req.body;

  const missingFields = mustFields.filter((field) => !profileData[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `not found/missing required fields: ${missingFields.join(" , ")}`,
    });
  }

  fs.readFile("profiles.json", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "NO FILE (profiles.json) found" });
    }
    const profiles = JSON.parse(data);
    profiles.push(profileData);
    fs.writeFile("profiles.json", JSON.stringify(profiles, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to save profile..." });
      }
      res.status(201).json({ message: "Profile saved/added successfully..." });
    });
  });
});

app.get("/api/profiles", (req, res) => {
  fs.readFile("profiles.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read profiles file." });
    }
    try {
      const profiles = JSON.parse(data);
      res.status(200).json(profiles);
    } catch (parseError) {
      res.status(500).json({ error: "Failed to parse profiles data." });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
