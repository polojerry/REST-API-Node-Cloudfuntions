const admin = require("firebase-admin");
const serviceAccount = require("./service_key.json");

const firebase = admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
})

module.exports = firebase;