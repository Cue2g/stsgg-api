const express = require('express')
const router = express.Router()
const controller = require('../controllers/summonerv4Routes');

   router
    .route('/byName/:rg/:summoner')
    .get(controller.summoner)

module.exports = router
  