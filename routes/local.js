const express = require('express');
const router  = express.Router();

let characters = [];


router.get('/characters', (req, res) => {

    res.send({
        "details" : characters
    })

})

router.get("/character/:id", (req, res) => {
    res.send(
       req.params
    );
})

router.post('/character', (req, res) => {

    let name = req.body.name;
    let id = req.body.id;
    let gender = req.body.gender

    characters.push({
        "name": name,
        "id" : id,
        "gender" : gender
    });

    // res.send({
    //     "message": `Successfully added ${name}`
    // })

    res.redirect(`/character/${id}`)

})

module.exports = router;