// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";
import { ethers } from "ethers";


// const API_KEY = "bLOQXMCKxwCUQakDFFQmjZzGfUIvjxpy";
// const NETWORK = "homestead";
// const provider = new ethers.providers.AlchemyProvider(NETWORK, API_KEY );

const config = {
  apiKey: "bLOQXMCKxwCUQakDFFQmjZzGfUIvjxpy",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config); 

async function getBalanceAtTime(){

  let address = prompt("Please enter your ETH address", "0X000000000000"); // Get wallet address
  let dateTime = prompt("Enter date time", "YYYY-MM-DD"); // Get date

  let block = await dater.getDate(dateTime); // Get blocknumber 
  block = block['block']

  let balance = await alchemy.core.getBalance(address, block);  // Get balance and format in terms of ETH
  balance = Utils.formatEther(balance);

  document.getElementById("balance").innerHTML = balance;

}

getBalanceAtTime();