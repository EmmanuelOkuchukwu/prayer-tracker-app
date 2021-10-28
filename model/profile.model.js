const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    dateOfBirth: {
        type: Date,
        required: true
    },
    bio: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: false
    },
    links: [
        { type: String, required: false }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

mongoose.model('profile', profileSchema);
