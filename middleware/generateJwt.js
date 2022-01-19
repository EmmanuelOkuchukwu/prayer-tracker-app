const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../keys');

const generateJwt = id => {
    return jwt.sign({ id }, SECRET_KEY, { expiresIn: '30d' });
};

module.exports = generateJwt;
