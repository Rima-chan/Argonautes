require('dotenv').config();
const Member = require('../models/member');

exports.Register = (req, res) => {
    const name = req.body.name;
    console.log(req.body)
    console.log('name')
    console.log(name)
    if (!name || name.length > 13 || name.lenght < 2) {
        return res.status(400).json({error: 'Invalid parameters : name must lenght between 2 and 13'})
    } 
    Member.findOne({ name: name})
      .then(member => {
          if (!member) {
             const member = new Member({  name: name});
             member.save()
               .then(() => res.status(201).json({message: 'Membre bien ajouté à l\'équipage 🌊'}))
               .catch(err => res.status(500).json({error: 'Cannot add Member'})) 
          } else {
              return res.status(409).json({error: '⚠️ Ce membre est déjà inscrit'});
          }
      })
      .catch(err => console.log(error))
}

exports.getAllMembers = (req , res) => {
    Member.findAll()
        .then(members => res.status(200).json({members}))
        .catch(err => res.status(404).json({error: 'Aucun membres d\'inscrit pour le moment' }));
}