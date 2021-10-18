const mongoose = require("mongoose");
const User = mongoose.model('user');

const deleteUser = (req, res) => {
    const _id = req.params;
    User.deleteOne(_id)
        .then(deleteUser => {
            res.status(200).json(deleteUser)
            console.log(deleteUser)
        })
        .catch(error => {
            console.log(error);
            res.status(422).json(error);
        })
}

module.exports = { deleteUser };