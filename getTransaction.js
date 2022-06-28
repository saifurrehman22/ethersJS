require('dotenv').config();
//const CONSTANTS = require("./constant");
const ethers = require('ethers');
const CONSTANT = require("./constant");
const API_URL = 'https://rinkeby.infura.io/v3/54864fd661734a288da4dcdda1ad2f7c';

const contractAbi = require("../artifacts/contracts/facets/FacetB.sol/FacetB.json");
	

// Connect to the network
let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);
const contract = new ethers.Contract(CONSTANT.DIAMOND_ADDRESS, contractAbi.abi, customHttpProvider);

//Calling readOnly Method
async function getTeacher(){
 	const getTeacher = await contract.getTeacher();
  //console.log(contract);
    console.log(getTeacher);
}

getTeacher();
