const AuthorController = require('../controllers/Author.controller');

module.exports = (app) => {
    app.get('/author', AuthorController.getAllAuthors);
    app.post('/author', AuthorController.createAuthor);        
    app.get('/author/:id', AuthorController.getOneAuthor);
    app.put('/author/:id', AuthorController.updateAuthor);    
    app.delete('/author/:id', AuthorController.deleteExistingAuthor);
}