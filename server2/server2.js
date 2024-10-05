// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const csv = require("csv-parser"); // CSV parser for reading CSV files
// const cors = require("cors"); // CORS middleware
// const app = express();
// const port = 3000;

// app.use(cors()); // Enable CORS for all routes
// app.use(express.json()); // Middleware to parse incoming JSON

// // File path for storing profiles
// const profilesJsonPath = path.join(__dirname, "data", "profiles.json");

// // Middleware to check if profile data is valid
// function validateProfileData(req, res, next) {
//   const { Name, Title, TargetedKeywords, Education, Certification, Contact } =
//     req.body;

//   // Check if any required field is missing
//   if (
//     !Name ||
//     !Title ||
//     !TargetedKeywords ||
//     !Education ||
//     !Certification ||
//     !Contact
//   ) {
//     return res.status(400).json({
//       error:
//         "Missing required fields: Name, Title, TargetedKeywords, Education, Certification, or Contact",
//     });
//   }
//   next();
// }

// // POST request to receive and save profile data
// app.post("/profile", validateProfileData, (req, res) => {
//   const newProfile = req.body;

//   // Append the new profile to the JSON file
//   fs.readFile(profilesJsonPath, "utf-8", (err, data) => {
//     if (err)
//       return res.status(500).json({ error: "Error reading profiles file" });

//     let profiles = [];
//     if (data) {
//       profiles = JSON.parse(data);
//     }
//     profiles.push(newProfile);

//     fs.writeFile(profilesJsonPath, JSON.stringify(profiles, null, 2), (err) => {
//       if (err)
//         return res.status(500).json({ error: "Error saving profile data" });

//       res.json({ message: "Profile saved successfully", profile: newProfile });
//     });
//   });
// });

// // GET request to fetch profiles from a CSV file
// app.get("/profiles", (req, res) => {
//   const profiles = [];
//   const csvFilePath = path.join(__dirname, "data", "profiles.csv");

//   // Read data from the CSV file
//   fs.createReadStream(csvFilePath)
//     .pipe(csv())
//     .on("data", (row) => {
//       profiles.push(row);
//     })
//     .on("end", () => {
//       res.json(profiles);
//     })
//     .on("error", (err) => {
//       res.status(500).json({ error: "Error reading profiles CSV file" });
//     });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
