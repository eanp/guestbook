require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const guest = require('./src/routes/guest');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());

// Use Router
app.use('/', guest);

// port
const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log('App listen on port 3000');
})
