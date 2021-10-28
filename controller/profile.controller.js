const mongoose = require('mongoose');
const Profile = mongoose.model('profile');

const createProfile = (req, res) => {
    const { name, age, bio, occupation, links } = req.body;
    if(!age || !bio) {
        res.status(422).send({ message: 'Fields are empty' })
    }
    req.user.password = undefined;
    const profile = new Profile({
        name,
        age,
        bio,
        occupation,
        links,
        owner: req.user
    })
    profile.save().then((saveProfile) => {
        res.status(201).json(saveProfile)
    }).catch((error) => {
        console.log(error);
        res.status(401).json({ error: error });
    })
}

const getMyProfile = (req, res) => {
    Profile.findOne({ owner: req.user._id })
    .populate("owner","_id")
    .then(myProfile => {
        res.status(200).send(myProfile);
        console.log(req.user)
    }).catch((error) => {
        res.status(422).send({ error: error })
        console.log(error);
    })
}

module.exports = { createProfile, getMyProfile };
