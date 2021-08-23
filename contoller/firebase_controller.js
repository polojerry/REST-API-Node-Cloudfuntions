const firebase = require("../firebase/firebase");

exports.characters = (req, res) => {

    let characters = []

    firebase.firestore().collection("characters").get()
    .then((response) => {
        response.forEach(doc => {
            characters.push(doc.data())
        })
        res.send({
            "characters" : characters
        })
    

    }).catch((error)=>{
        console.log("error")
        res.send({
            "message": "error"
        })
    })
    
}

exports.character =  (req, res) => {

    let name = req.body.name;
    let id = req.body.id;
    let gender = req.body.gender

    const data = {
        "name": name,
        "id" : id,
        "gender" : gender
    }

    return firebase.firestore().collection("characters")
    .doc(id).set(data).then((response) => {
        res.send({
            "message": `Successfully added ${name}`
        })
    }).catch((error)=> {
        console.log(error)
        res.send({
            "message": "error"
        })
    })
}