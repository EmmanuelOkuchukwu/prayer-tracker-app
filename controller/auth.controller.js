// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('user');
// const { SECRET_KEY } = require('../keys');
const gravatar = require('gravatar');
//
// const register = (req, res) => {
//     const { name, email, username, password } = req.body;
//     if(!name || !email || !username || !password) {
//         res.status(422).send({ message: 'All of the fields required!' });
//     }
//     User.findOne({ email: email })
//         .then((emailValid) => {
//             if(emailValid) {
//                 res.status(422).send({ message: 'Email already exists!' });
//             }
//             bcrypt.hash(password, 14)
//                 .then((passwordHashed) => {
//                     const avatar = gravatar.url(email, {
//                         s: '200',
//                         r: 'pg',
//                         d: 'mm'
//                     })
//                     const user = new User({
//                         name, email, username, password: passwordHashed, avatar
//                     })
//                     user.save()
//                         .then((savedUser) => {
//                             const { _id } = savedUser;
//                             const token = jwt.sign({ email, _id }, SECRET_KEY)
//                             res.status(201).send({ token });
//                         })
//                         .catch((error) => {
//                             res.status(422).send({ error: error });
//                         });
//                     })
//                 })
//         .catch((error) => console.log(error));
// }
//
// const login = (req, res) => {
//     const { email, password } = req.body;
//     if(!email || !password) {
//         return res.status(422).send({ error: 'Email or password is incorrect' });
//     }
//     User.findOne({ email: email })
//         .then((registeredUser) => {
//             if(!registeredUser) {
//                 return res.status(422).send({ error: 'Email does not exist!' });
//             }
//             bcrypt.compare(password, registeredUser.password)
//                 .then((signIn) => {
//                     if(signIn) {
//                         const { email, _id, username, avatar } = registeredUser;
//                         const token = jwt.sign({ email, _id }, SECRET_KEY)
//                         return res.send({ token, email, _id, username, avatar });
//                     } else {
//                        return res.status(422).send({ error: 'Failed to login!' });
//                     }
//                 })
//         })
//         .catch((err) => {
//             res.status(422).send({ error: err });
//             console.log(err);
//         });
// }
//
// module.exports = { register, login };


const expressAsyncHandler = require('express-async-handler');
const generateJwt = require('../middleware/generateJwt');

const register = expressAsyncHandler(async (req, res) => {
    const { firstname, surname, email, username, password, dob } = req?.body;
    const registeredUser = await User.findOne({ email })
    if (registeredUser) throw new Error('User already registered!')
    try {
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        const user = await User.create({ firstname, surname, email, avatar, username, password, dob });
        res?.status(200).json(user);
    } catch (e) {
        res?.json(e);
    }
})

const login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req?.body;
    const userFound = await User.findOne({ email });
    if(userFound && (await userFound?.isPasswordMatch(password))) {
        res?.json({
            _id: userFound?._id,
            firstname: userFound?.firstname,
            surname: userFound?.surname,
            email: userFound?.email,
            isAdmin: userFound?.isAdmin,
            avatar: userFound?.avatar,
            token: generateJwt(userFound?._id)
        })
    } else {
        res?.status(401);
        throw new Error('Invalid login credentials!');
    }
})

const getUsers = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res?.json(users);

    } catch(e) {
        res?.json(e);
    }
})

const getMyProfile = expressAsyncHandler(async (req, res) => {
    // const { _id } = req?.user;
    try {
        const me = await User.findById(req?.user?._id).select('-password');
        res?.json(me);
    } catch(error) {
        res?.json(error);
    }
})

module.exports = {
    register,
    login,
    getUsers,
    getMyProfile
};
