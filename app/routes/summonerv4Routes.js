const express = require('express')
const router = express.Router()
const controller = require('../controllers/summonerv4Routes');

   router
    .route('/byName/:rg/:summoner')
    .get(controller.summonerByName)

    router
      .router('/byAccount/:rg/:summoner')
      .get(controller.summonerByAccount)

module.exports = router
