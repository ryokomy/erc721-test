const Tokyo721Token = artifacts.require('Tokyo721Token')

module.exports = async (callback) => {
    let account = web3.eth.accounts[0] // if this doesn't work, write your address directly here
    let spots = [
        {to: account, tokenId: 1, name: 'TokyoTower', uri: 'https://storage.googleapis.com/tokyo721/jsons/tokyotower.json'},
        {to: account, tokenId: 2, name: 'Mt.Fuji', uri: 'https://storage.googleapis.com/tokyo721/jsons/mtfuji.json'},
        {to: account, tokenId: 3, name: 'Ryo Komiyama', uri: 'https://storage.googleapis.com/tokyo721/jsons/ryokomy.json'}
    ]
    let instance = await Tokyo721Token.deployed()
    let results = []
    for (spot of spots) {
        results.push(instance.mintWithURI(spot.to, spot.tokenId, spot.name, spot.uri))
    }
    console.log(await Promise.all(results))
};