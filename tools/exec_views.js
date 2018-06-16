const Kyuzan721Token = artifacts.require('Kyuzan721Token')

module.exports = async (callback) => {
    let instance = await Kyuzan721Token.deployed()

    // name, symbol
    let name = await instance.name.call()
    let symbol = await instance.symbol.call()
    console.log('name: ', name);
    console.log('sybmol: ', symbol);

    // total supply
    let _totalSupply = await instance.totalSupply.call()
    let totalSupply = _totalSupply.toNumber()
    console.log('totalSupply: ', totalSupply);

    // members (tokens)
    for (let i = 0; i < totalSupply; i++) {
        let member = await instance.memberByIndex.call(i)
        let id = member[0].toNumber()
        let name = member[1]
        let company = member[2]
        console.log('id:', id, '   name:', name, '   company:', company)
    }
};