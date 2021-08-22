const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');

const localRoutes = require("./routes/local")
const firebaseRoutes = require("./routes/firebase")

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use("/api/local", localRoutes)
app.use("/api/firebase", firebaseRoutes)


// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);