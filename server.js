require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const {
    MONGODB_URI,
    PORT = 8080
} = process.env;

const api = require('./routes')

const app = express();

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    const status = err || 'connected!';
    console.log(`mongodb ${status} MONGODB_URI => ${MONGODB_URI}`);
});

app.use(express.json());

app.use('/', api);

app.listen(PORT, () => {
    console.log('Server is running! => ', { PORT });
});