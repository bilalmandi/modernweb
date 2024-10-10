const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Specify folder to save files
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // File naming format
  }
});

const upload = multer({ storage: storage });

// Ensure the "uploads" folder exists
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Routes
// Upload single file
app.post("/save/single", upload.single("file"), (req, res) => {
  res.send("File uploaded");
});

// Upload multiple files
app.post("/save/multiple", upload.array("files", 100), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No files uploaded.");
  }
  const filePaths = req.files.map((file) => file.path);
  res.send(`Files uploaded successfully: ${filePaths.join(", ")}`);
});

// Fetch a random file from the server
app.get("/fetch/single", (req, res) => {
  const files = fs.readdirSync(path.join(__dirname, "uploads"));
  if (files.length === 0) {
    return res.status(503).send({ message: "No images available" });
  }
  const randomFile = _.sample(files);
  res.sendFile(path.join(__dirname, "uploads", randomFile));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
