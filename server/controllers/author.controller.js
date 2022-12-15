const Author = require('../models/author.model');

module.exports = {

    getAllAuthors:(req,res)=>{                 // getting all authors
        Author.find({})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{res.status(400).json({err})})
    },

    createAuthor:(req,res) => {                 // create author
        Author.create(req.body)
        .then(author => res.json({author}))
        .catch(err => {res.status(400).json({err})})
    },

    getOneAuthor:(req,res) => {                 // find one author
        Author.findById({ _id: req.params.id })
        .then((result) => {res.json(result)})
        .catch((err) => {res.status(400).json({err})})
    },

    updateAuthor:(req,res) => {                 // update
        Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then((updatedAuthor) => {res.json({updatedAuthor})})
        .catch((err)=> {res.status(400).json({err})})
    },

    deleteExistingAuthor:(req, res) => {        // delete
        Author.deleteOne({ _id: req.params.id })
            .then((deletedResponse) => {
            res.json({ deletedResponse });
            })
            .catch((err) => {res.status(400).json({ err });});
    }

}