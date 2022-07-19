const express = require('express');
const mongoose = require('mongoose');

const {
    MONGODB_URI,
    PORT = 8080
} = require('./src/consts');

const api = require('./src/routes')

const app = express();

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    const status = err || 'connected!';
    console.log('mongodb connection:', {status ,MONGODB_URI});
});

app.use(express.json());

app.use('/', api);

app.listen(PORT, () => {
    console.log('Server is running! => ', { PORT });
});