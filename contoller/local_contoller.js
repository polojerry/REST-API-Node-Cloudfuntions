let characters = [];

exports.characters =  (req, res) => {

    res.send({
        "details" : characters
    })

}

exports.characterWithId =  (req, res) => {
    res.send(
       req.params
    );
}

exports.character = (req, res) => {

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

}