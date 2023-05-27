// Setup: npm install alchemy-sdk

import { Alchemy, Utils, Network } from 'alchemy-sdk';
import EthDater from 'ethereum-block-by-date';

const API_KEY = "bLOQXMCKxwCUQakDFFQmjZzGfUIvjxpy";
const config = { apiKey: API_KEY, network: Network.ETH_MAINNET, };
const alchemy = new Alchemy(config); 
const dater = new EthDater( alchemy.core ); // Ethers provider, required.


getTxnData();

async function getTxnData(){

  let userAddr = prompt("Please enter your ETH address", "0X000000000000");
  let startBlock = prompt("Enter a start block", "0x2340");

  // let userAddr = "0x6eDE1D8c63f68034839011b7B177E66359F71c44";
  // let startBlock ="0x1073C91";

  balanceButton(); 

  if (userAddr != null) {

    const data = await alchemy.core.getAssetTransfers({
      fromBlock: startBlock,
      fromAddress: userAddr,
      category: ["external", "internal", "erc20", "erc721", "erc1155"],
    });
    
    updateHTML(data);

    const transactionData = [];

    transactionData[0] = "Transaction data for address " + userAddr + " from block " 
    + startBlock + " to the latest block" + "<br>".repeat(2)
    + "_".repeat(48) ;

    for (let x=0 ; x < data.transfers.length ; x++){
  
      transactionData[x+1] = 
      "<br>".repeat(2) + "Transaction: " + x + "<br>".repeat(2) 
      + "TO: " + data.transfers[x].to + "<br>".repeat(2) 
      + "FROM: " + data.transfers[x].from + "<br>".repeat(2) 
      + "ASSET: " + data.transfers[x].asset + "<br>".repeat(2) 
      + "AMOUNT: " + data.transfers[x].value + "<br>".repeat(2)
      + "HASH: " + data.transfers[x].hash + "<br>".repeat(2)
      + "BLOCK NUMBER: " + data.transfers[x].blockNum + "<br>".repeat(2)
      + "CATEGORY: " + data.transfers[x].category + "<br>".repeat(2)
      + "_".repeat(48) ;

    }  

    console.log(transactionData);
    downloadButton(transactionData);
  }
}

function updateHTML(data){

  document.getElementById("to").innerHTML = data.transfers[0].to;
  document.getElementById("from").innerHTML = data.transfers[0].from;
  document.getElementById("asset").innerHTML = data.transfers[0].asset;
  document.getElementById("amount").innerHTML = data.transfers[0].value;
  document.getElementById("hash").innerHTML = data.transfers[0].hash;
  document.getElementById("blockNumber").innerHTML = data.transfers[0].blockNum;
  document.getElementById("category").innerHTML = data.transfers[0].category;
  
}

function downloadButton(transactionData){
     
  const downloadButton = document.createElement('button');
  downloadButton.innerText= 'Download transaction data';
  document.body.appendChild(downloadButton);
  
  downloadButton.addEventListener("click", function (){ 

    const file = new Blob( transactionData , {type: "text/html"} );
  
    let url = window.URL.createObjectURL(file);
    let anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "transactions.html";
    anchor.click();
    window.URL.revokeObjectURL(url);
    document.removeChild(anchor);
   }  );

  document.body.appendChild(downloadButton);

}

function balanceButton(){
     
  const balanceButton = document.createElement('button');
  balanceButton.innerText= 'Balance at DATE';
  document.body.appendChild(balanceButton);
  
  balanceButton.addEventListener("click", function ()
  { 
    getBalanceAtTime(); 
  } );

  document.body.appendChild(balanceButton);
}


async function getBalanceAtTime(){

  let address = prompt("Please enter your ETH address", "0X000000000000"); // Get wallet address
  let dateTime = prompt("Enter date in YYYY-MM-DD", "2022-02-18" ); // Get date

  let block = await dater.getDate(dateTime); // Get blocknumber 
  block = block['block']

  let balance = await alchemy.core.getBalance(address, block);  // Get balance and format in terms of ETH
  balance = Utils.formatEther(balance);

  document.getElementById("balance").innerHTML = balance;

}

