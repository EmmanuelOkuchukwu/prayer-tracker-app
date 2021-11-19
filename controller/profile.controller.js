const mongoose = require('mongoose');
const Profile = mongoose.model('profile');
const User = mongoose.model('user');
const Task = mongoose.model('task');

//TODO: change this block of code and test that out
const createProfile = (req, res) => {
    const { age, bio, occupation, links } = req.body;
    let profileValues = {};
    profileValues.owner = req.user._id;
    if(bio) {
        profileValues.bio = bio;
    }
    if(age) {
        profileValues.age = age;
    }
    if(occupation) {
        profileValues.occupation = occupation;
    }
    if(links) {
        profileValues.links = links;
    }
    let profile = Profile.findOne({ owner: req.user._id })
    if(profile) {
        profile = Profile.findOneAndUpdate({ owner: req.user._id })
        .then(() => {
            return res.status(200).json(profile);
        }).catch((error) => {
            return res.status(500).json({message: error});
        })
    }
    profile = new Profile(profileValues)
    profile.save().then((savedProfile) => {
        res.status(201).json(savedProfile);
        console.log(req.user._id)
    }, (error) => {
        console.log('Error:', error);
        return res.status(500).send({message: error});
    })
}

const getMyProfile = (req, res) => {
    Profile.findOne({ owner: req.user._id })
    .populate("owner","_id name avatar")
    .then(myProfile => {
        res.status(200).send(myProfile);
    }).catch((error) => {
        res.status(422).send({ error: error })
        console.log(error);
    })
}

const deleteUser = async (req, res) => {
    try {
        const user = User.findOne(req.user._id)
        await Profile.deleteOne({ user: req.user._id });
        await User.deleteOne({ _id: req.user._id });
        await Task.deleteMany({ owner: req.user._id });
        res.status(200).json(user)
        console.log(user)
    } catch(e) {
        res.status(500).json({ message: e });
        console.log(e)
    }
}
module.exports = { createProfile, getMyProfile, deleteUser };
