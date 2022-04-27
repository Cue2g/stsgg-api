const express = require('express')
const app = express()
const PORT = process.env.PORT || 6000;
const cors = require('cors')
require('dotenv').config()

app.use(cors())

const baseurl = '/api/stsgg/v1'

///routes declaration
const summonerV4 = require('./app/routes/summonerv4Routes');


////routes 
app.use(baseurl + '/summonerV4', summonerV4);

app.all('*',(req,res) => {
    res.status(404).json({
        status: 'not found',
        message: `Can´t find ${req.method} : ${req.originalUrl} on this API`,
    })
})

app.listen(PORT, () =>{
    console.log(`Servicio STSGG listening ${PORT}`)
})