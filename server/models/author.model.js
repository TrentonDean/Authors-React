const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({         // sets up a schema where a product has a title, price, and description
    name: { type: String, required: [true, "Name is required"], minlength:[3, "Name must be at least 3 characters"] }
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);