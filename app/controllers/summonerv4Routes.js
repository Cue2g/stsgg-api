const axios = require('axios');
const urlRiot = require('../riot/url.json');
const apisRiot = require('../riot/riotApi')
const utilis = require('../utilis')

const summonerV4 = apisRiot.summonerV4

exports.summonerByName = async function(req, res) {
  const Summoner = encodeURI(req.params.summoner);
  const rg = req.params.rg;
  const region = urlRiot.find(res => res.name === rg);
  const urlByName = summonerV4.byName(Summoner);

  if (!region) {
    return res.status(400).json({
      estado: 400,
      mensaje: "bad request, region doesn't exist"
    });
  }

  const regionUrl = region.url;
  const url = utilis.createUrl(regionUrl, urlByName);
  try {
    const result = await axios.get(url);
    return res.status(200).json({
      estado: 200,
      data: result.data
    })
  } catch (error) {
    console.log(error)
    return res.json({
      estado: 404,
      menesaje: 'summoner not found'
    })
  }
}

exports.summonerByAccount = async function(req, res) {
  const AccountId = req.params.encryptedAccountId;
  const rg = req.params.rg
  const region = urlRiot.find(res => res.name === rg)
  const urlByAccount = summonerV4.byAccount(AccountId)
  if (!region) {
    return res.status(400).json({
      estado: 400,
      mensaje: "bad request, region doesn't exist"
    });
  }
  const regionUrl = region.url;
  const url = utilis.createUrl(regionUrl, urlByAccount);
  try {
    const result = await axios.get(url);
    return res.status(200).json({
      estado: 200,
      data: result.data
    });
  } catch (e) {
    console.log(error)
    return res.json({
      estado: 404,
      menesaje: 'summoner not found'
    })
  }
}
