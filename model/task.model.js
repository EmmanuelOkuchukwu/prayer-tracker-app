const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

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
    },
    createdBy: {
        type: ObjectId,
        ref: 'user'
    }
})

mongoose.model('task', taskSchema);
