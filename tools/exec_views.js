const Tokyo721Token = artifacts.require('Tokyo721Token')

module.exports = async (callback) => {
    let instance = await Tokyo721Token.deployed()

    // name, symbol
    let name = await instance.name.call()
    let symbol = await instance.symbol.call()
    console.log('name: ', name);
    console.log('sybmol: ', symbol);

    // total supply
    let _totalSupply = await instance.totalSupply.call()
    let totalSupply = _totalSupply.toNumber()
    console.log('totalSupply: ', totalSupply);

    // spots (tokens)
    for (let i = 0; i < totalSupply; i++) {
        let spot = await instance.spotByIndex.call(i)
        let id = spot[0].toNumber()
        let name = spot[1]
        console.log('id:', id, '   name:', name)
    }
};