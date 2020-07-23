const config = require('./config/config');
const routes = require('./routes');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);


app.listen(config.port, ()=>{
    console.log(`Server running on port: ${config.port}`)
});