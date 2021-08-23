const express = require('express');
const router  = express.Router();

const {
    character,
    characters,
} = require("../contoller/firebase_controller")


router.get('/characters', characters)
router.post('character', character)

module.exports = router;