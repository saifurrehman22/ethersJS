require('dotenv').config();
const ethers = require('ethers');
const CONSTANT = require("./constant");
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAbi = require("../artifacts/contracts/facets/FacetC.sol/FacetC.json");

// Connect to the network
let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);


// Sending transaction
async function addMedicalShop(id,name,lic) {	
    
    let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);
    let contractWithSigner = new ethers.Contract(CONSTANT.DIAMOND_ADDRESS, contractAbi.abi, wallet);
    const addData = await contractWithSigner.addMedicalShop(id,name,lic);
    console.log("Transaction Successfully Done");
    console.log("Tx Hash :", addData.hash);
    console.log("Confirmation :",addData.confirmations);          
}
	
// Calling function
addMedicalShop(
    1,
    "FDPP",
    157200 
);