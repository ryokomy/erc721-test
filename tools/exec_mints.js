const Kyuzan721Token = artifacts.require('Kyuzan721Token')

let to = web3.eth.accounts[0]
let tokenId = 1
let name = 'ryokomy'
let company = 'kyuzan'

let members = [
    {to: web3.eth.accounts[0], tokenId: 1, name: 'takumi', company: 'kyuzan'},
    {to: web3.eth.accounts[0], tokenId: 2, name: 'komy', company: 'kyuzan'},
    {to: web3.eth.accounts[0], tokenId: 3, name: 'shintaro', company: 'yahoo'},
    {to: web3.eth.accounts[0], tokenId: 4, name: 'tomohiro', company: 'berlin'},
    {to: web3.eth.accounts[0], tokenId: 5, name: 'tomonari', company: 'recruit'}
]


module.exports = async (callback) => {
    // perform actions
    let instance = await Kyuzan721Token.deployed();
    for (member of members) {
        let result = await instance.mint(member.to, member.tokenId, member.name, member.company);
        console.log(result);
    }
};