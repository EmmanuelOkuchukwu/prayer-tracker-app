const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('task', taskSchema);
