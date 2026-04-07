require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cors = require("cors");

const User = require("./model/User");
const Contact = require("./model/Contact");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use(
  session({
    secret: "cmpt315_lab10_secret",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));

function isValidUsername(username) {
  return (
    typeof username === "string" &&
    /^[A-Za-z0-9]{3,20}$/.test(username)
  );
}

function isValidPassword(password) {
  return (
    typeof password === "string" &&
    password.length >= 6 &&
    /[A-Za-z]/.test(password) &&
    /[0-9]/.test(password)
  );
}

app.get("/api/health", (req, res) => {
  res.json({ message: "API is running" });
});

app.post("/api/register", async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      first,
      last,
      phone,
      address,
      city,
      province,
      postalCode
    } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Need username/password." });
    }

    if (!isValidUsername(username) || !isValidPassword(password)) {
      return res.status(400).json({ message: "Invalid username/password." });
    }

    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      passwordHash,
      email,
      first,
      last,
      phone,
      address,
      city,
      province,
      postalCode
    });

    res.status(201).json({ message: "Registration successful." });
  } catch (error) {
    res.status(500).json({ message: "Server error during registration." });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Need username/password." });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      return res.status(401).json({ message: "Password is invalid." });
    }

    req.session.username = username;

    res.json({ message: "Login successful.", username });
  } catch (error) {
    res.status(500).json({ message: "Server error during login." });
  }
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logout successful." });
  });
});

app.get("/api/me", (req, res) => {
  if (!req.session.username) {
    return res.status(401).json({ message: "Not logged in." });
  }
  res.json({ username: req.session.username });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ message: "Please fill out all fields." });
    }

    const contactDetails = await Contact.create({ fullName, email, phone, message });

    res.status(201).json({ message: "Message sent successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error during sending message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});