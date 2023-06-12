require('dotenv').config();
const PORT=process.env.PORT;
const {serverStart} =require('./server.js');

serverStart(PORT)