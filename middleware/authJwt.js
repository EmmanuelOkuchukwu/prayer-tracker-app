const mongoose = require('mongoose');
const User = mongoose.model('user');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../keys');
const expressAsyncHandler = require('express-async-handler');

const requireJwt = expressAsyncHandler( async (req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')) {
        token = req?.headers?.authorization?.split(" ")[1];
        try {
            if(token) {
                const decodedUser = jwt.verify(token, SECRET_KEY);
                // find the logged in user
                req.user = await User.findById(decodedUser?.id).select("-password");
                next()
            }
        } catch(error) {
            throw new Error("Not Authorized!");
        }
    } else {
        throw new Error('No token found for the header!');
    }
})

module.exports = requireJwt;
