const express = require('express');
const router  = express.Router();

const {
    character,
    characterWithId,
    characters
} = require("../contoller/local_contoller")


router.get('/characters',characters);

router.get("/character/:id", characterWithId);

router.post('/character',character);

module.exports = router;