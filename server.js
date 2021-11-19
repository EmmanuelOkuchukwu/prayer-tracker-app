const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { DbConnection } = require('./dbConn');

const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to task tracker application!' });
})

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

require('./model/task.model');
require('./model/user.model');
require('./model/profile.model');

app.use(express.json());
app.use(require('./routes/task.routes'));
app.use(require('./routes/auth.routes'));
app.use(require('./routes/profile.routes'));
app.use(require('./routes/user.routes'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

DbConnection()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
})


