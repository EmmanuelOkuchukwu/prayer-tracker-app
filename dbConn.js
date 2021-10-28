const mongoose = require('mongoose');
const { DBURI } = require('./keys');
const { connect } = mongoose;

const DbConnection = async () => {
    try {
       await connect(DBURI)
       console.log(`MongoDB connection - SUCCESS`);
    } catch(e) {
        console.log(`MongoDB connection - FAILED: ${e}`);
        process.exit(1);
    }
}

module.exports = { DbConnection };
