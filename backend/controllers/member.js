require('dotenv').config();
const Member = require('../models/member');

exports.Register = (req, res) => {
    const name = req.body.name;
    console.log(name)
    if (!name || name.length > 13 || name.lenght < 2) {
        return res.status(400).json({error: 'Invalid parameters : name must lenght between 2 and 13'})
    } 
    Member.findOne({ name: name})
      .then(member => {
          if (!member) {
             const member = new Member({  name: name});
             member.save()
               .then(() => res.status(201).json({message: 'User created !'}))
               .catch(err => res.status(500).json({error: 'Cannot add Member'})) 
          } else {
              return res.status(409).json({error: 'Member already exist !'});
          }
      })
      .catch(err => console.log(error))
}