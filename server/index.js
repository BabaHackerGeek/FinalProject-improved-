// const express = require("express");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// app.use(cors());

// app.listen(process.env.PORT || 3001, () => {
//   console.log(`Server listening on ${process.env.PORT || 3001}`);
// });

// app.get("/api/:name", (req, res) => {
//   res.json({ message: `Hello ${req.params.name}, from server!` });
// });

// // Have Node serve the files for our built React app
// // app.use(express.static(path.resolve(__dirname, "./client/build")));
// app.use(express.static(path.join(__dirname, "/client/build")));

// // All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });


// server/index.js
require('dotenv').config(); // Load .env variables
const express = require("express");
const cors = require("cors");
const path = require("path");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON data from POST requests

// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432, // default PostgreSQL port
  ssl: {
    rejectUnauthorized: false, // For secure connections on some platforms
  },
});

// POST endpoint to handle form submissions
app.post('/api/submit-form', async (req, res) => {
  const {
    firstName,
    lastName,
    eventDate,
    eventCity,
    email,
    phone,
    serviceType,
    budget,
    guestCount,
    eventDetails,
  } = req.body;

  try {
    const queryText = `
      INSERT INTO event_contacts (first_name, last_name, event_date, event_city, email, phone, service_type, budget, guest_count, event_details)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;
    `;
    const values = [firstName, lastName, eventDate, eventCity, email, phone, serviceType, budget, guestCount, eventDetails];
    
    const result = await pool.query(queryText, values);
    
    res.status(201).json({ message: 'Form submitted successfully', data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while submitting the form' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.static(path.resolve(__dirname, "../lauryn-events/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../lauryn-events/build", "index.html"));
});
