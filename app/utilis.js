exports.createUrl = function (regionUrl, apiUrl){
    const url = `https://${regionUrl}${apiUrl}?api_key=${process.env.riotKey}`;
    return url
}