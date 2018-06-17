const Tokyo721Token = artifacts.require('Tokyo721Token')

module.exports = async (callback) => {
    let account = web3.eth.accounts[0] // if this doesn't work, write your address directly here
    let spots = [
        {to: account, tokenId: 1, name: 'TokyoTower'}
    ]
    let instance = await Tokyo721Token.deployed()
    let results = []
    for (spot of spots) {
        results.push(instance.mint(spot.to, spot.tokenId, spot.name))
    }
    console.log(await Promise.all(results))
};