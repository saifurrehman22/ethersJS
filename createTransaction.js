require('dotenv').config();
const ethers = require('ethers');
const API_URL = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAbi = require("../artifacts/contracts/Seaport.sol/Seaport.json");
const Contract_Address  = '0x9471B35AF54cb6e07c02049C2623FB462a88D8a1';   // seaport address
// Connect to the network
let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);


// Sending transaction
async function fulfillBasicOrder() {	
    
    let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);
    
    let contractWithSigner = new ethers.Contract(Contract_Address, contractAbi.abi, wallet);
    const addData = await contractWithSigner.fulfillBasicOrder(["0x0000000000000000000000000000000000000000", 0, 9250000000000000, "0xe2b5a5b611643c7e0e4d705315bf580b75472d7b", "0x9471B35AF54cb6e07c02049C2623FB462a88D8a1", "0x30244443157501d6D2E8376Ed3421F8a2De9ce57", 1, 1, 2, 1656075011, 1658667011, "0x0000000000000000000000000000000000000000000000000000000000000000", 64403461947918441, "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000", "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000", 2, [["0x0000000000000000000000000000000000000000000000000000e35fa931a000"]], "0x36dceae3bdea3a6d9358c4699b60a8c26fa072f8aecf79f10dda39d2e7f8e58e4dd85c54611447ffc7da4f8b2cf358c0ce7f6f84350f018bdf3642ca019d1c671b"]) 

    console.log("Transaction Successfully Done");
    console.log("Tx Hash :", addData.hash);
    console.log("Confirmation :",addData.confirmations);          
}
	
// Calling function
fulfillBasicOrder();
