const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('user');

const register = (req, res) => {
    const { name, email, username, password } = req.body;
    if(!name || !email || !username || !password) {
        res.status(422).send({ message: 'All of the fields required!' });
    }
    User.findOne({ email: email })
        .then((emailValid) => {
            if(emailValid) {
                res.status(422).send({ message: 'Email already exists!' });
            }
            bcrypt.hash(password, 14)
                .then((passwordHashed) => {
                    const user = new User({
                        name, email, username, password: passwordHashed
                    })
                    user.save()
                        .then((savedUser) => {
                                res.status(201).json({ message: 'User has been successfully registered!' });
                        })
                        .catch((error) => {
                            res.status(422).json({ error: error });
                        });
                    })
                })
        .catch((error) => console.log(error));
}

const login = (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(422).send({ error: 'Email or password is incorrect' });
    }
    User.findOne({ email: email })
        .then((emailNotFound) => {
            if(emailNotFound) {
                res.status(422).send({ error: 'Email does not exist!' });
            }
            bcrypt.hash(password, emailNotFound.password)
                .then((signIn) => {
                    if(signIn) {
                        const { email, _id, username } = signIn;
                        const jwt = jwt.sign({ email, username, _id })
                    }
                })
        })
}

module.exports = { register, login };
