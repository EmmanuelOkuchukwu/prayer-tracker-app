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
    dueDate: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean
    },
    createdBy: {
        type: ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

mongoose.model('task', taskSchema);
