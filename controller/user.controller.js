const mongoose = require("mongoose");
const User = mongoose.model('user');
const Profile = mongoose.model('profile');
const Task = mongoose.model('task');
//
// const getUsers = (req, res) => {
//     User.find()
//         .then((users) => {
//             res.status(200).send(users)
//             console.log(users)
//         }, err => {
//             res.status(500).json(err);
//         })
// }
//
const getUser = (req, res) => {
    // const _id = req.params.id;
    User.findOne({user: req.user._id}).then((user) => {
        res.status(200).send(user);
        console.log(user);
    }).catch((error) => {
        res.status(500).send({ message: error.message });
    })
}

const updateUser = (req, res) => {
    // const _id = req.params.id;
    const {email, name} = req.body;
    User.findByIdAndUpdate(req.user._id, {email, name}, { useFindAndModify: false }).then((updatedUser) => {
        if (!updatedUser) {
            res.status(404).send({
                message: `Cannot update User with id=${req.user._id}. Maybe User was not found!`
            });
        } else res.status(200).send(updatedUser);
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating User with id=${req.user._id}`
        });
        console.log(err);
    })
}
//
// const deleteUser = (req, res) => {
//     const _id = req.params.id;
//     User.deleteOne(_id)
//         .then(deleteUser => {
//             res.status(200).json(deleteUser)
//             console.log(deleteUser)
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(422).json(error);
//         })
// }
//
module.exports = { /* getUsers, */ getUser, updateUser, /* deleteUser */ };
