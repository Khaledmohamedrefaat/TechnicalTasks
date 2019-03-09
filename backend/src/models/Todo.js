const { model, Schema } = require('mongoose');

const TodoSchema = new Schema({
    name: String,
    finished: Boolean
});

const Todo = model('Todo', TodoSchema);

module.exports = Todo ;