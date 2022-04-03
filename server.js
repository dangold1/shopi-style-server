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
//----------------------------------DB Connection---------------------------------------------
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    const status = err || 'connected!';
    console.log(`mongodb ${status} MONGODB_URI => ${MONGODB_URI}`);
});

//----------------------------------Middlewares---------------------------------------------
app.use(bodyParser.json());
app.use(cors());
//---------------------------------------Routes-----------------------------------------------

app.use('/api', api);

//--------------------------------------Running Server-------------------------------------------------

app.listen(PORT, () => {
    console.log('Server is running! => ', { PORT });
});