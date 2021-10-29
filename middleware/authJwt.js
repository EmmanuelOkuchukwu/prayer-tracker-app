const mongoose = require('mongoose');
const User = mongoose.model('user');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../keys');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(401).send({ error: 'You need to be logged in to have access!' });
    }
    const token = authorization.replace("Bearer ","");
    jwt.verify(token, SECRET_KEY, (error, payload) => {
        if(error) {
            return res.status(401).send({ error: 'You need to be logged in to have access!' })
        }
        const { _id } = payload;
        User.findById(_id).then(userInfo => {
            req.user = userInfo;
            next();
        })
    })
}
