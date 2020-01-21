const mongoose = require('mongoose')

const Schema = mongoose.Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    category: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Category'
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note