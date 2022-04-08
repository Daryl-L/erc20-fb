const { ethers } = require('ethers')
var fs = require('fs');
var jsonFile = "./build/contracts/Calibur.json";
var parsed = JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;

let contract = new ethers.Contract("0xbAD5fa4dAA1f3AA76DdB3b317BC194F83C05dB2C", abi)
const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545')
const wallet = new ethers.Wallet('a07cb2c78e8a7b83a8d577b94b2c50b257a6a2fbcfb3e06718b04cd30ae86e74', provider)
contract = contract.connect(wallet)

contract.mint(process.argv[2], 1)