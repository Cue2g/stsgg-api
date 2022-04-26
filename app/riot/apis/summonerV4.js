const summonerv4 = {
    byAccount:'/lol/summoner/v4/summoners/by-account/',
    byName: '/lol/summoner/v4/summoners/by-name/',
    bypuuid:'/lol/summoner/v4/summoners/by-puuid/',
    bySummonnerID:'/lol/summoner/v4/summoners/',
    me:'/lol/summoner/v4/summoners/me'
}

exports.byAccount = function (encryptedAccountId){
    const url = summonerv4.byAccount + encryptedAccountId
    return url
}

exports.byName = function (summonerName){
    const url = summonerv4.byName + summonerName
    return url
}

exports.bypuuid = function (encryptedPUUID){
    const url = summonerv4.bypuuid + encryptedPUUID
    return url
}

exports.bySummonnerID = function (encryptedSummonerId){
    const url = summonerv4.bySummonnerID + encryptedSummonerId
    return url
}

exports.bySummonnerID = function (){
    const url = summonerv4.me 
    return url
}


