const Kyuzan721Token = artifacts.require('Kyuzan721Token')

module.exports = async (callback) => {
    let account = web3.eth.accounts[0] // if this doesn't work, write your address directly here
    let members = [
        {to: account, tokenId: 1, name: 'takumi', company: 'kyuzan'},
        {to: account, tokenId: 2, name: 'komy', company: 'kyuzan'},
        {to: account, tokenId: 3, name: 'shintaro', company: 'yahoo'},
        {to: account, tokenId: 4, name: 'tomohiro', company: 'berlin'},
        {to: account, tokenId: 5, name: 'tomonari', company: 'recruit'}
    ]
    console.log(Kyuzan721Token.address)
    let instance = await Kyuzan721Token.deployed();
    let results = [];
    for (member of members) {
        results.push(instance.mint(member.to, member.tokenId, member.name, member.company))
    }
    await Promise.all(results);
};