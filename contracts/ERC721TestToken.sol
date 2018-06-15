pragma solidity ^0.4.21;

import "../submodules/openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

contract ERC721TestToken is ERC721Token {

    constructor(string _name, string _symbol) ERC721Token(_name, _symbol) public {}

}