const express = require('express');
const cors = require('cors');

/*
http://localhost:4000/api/test to get started
*/

const testRoute = require('./routes/testRoute');

require('dotenv').config();

const app = express();

app.use(cors());

app.use('/api/test', testRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log('server running!');
}); 
