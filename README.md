## About 

This is a simple project that enables you to:

1. Get transaction details for an Ethereum account on mainnet. This application is able to get transaction details for all ERC 20 tokens (Not just ETH)
2. Get account balance of an Ethereum address at a given date

## How to Run

First, clone this repo in a your chosen project directory.

### Requirements 

1. Web browser 
2. Server

### Running 

Open the project folder from your Visual Studio (VS) Code editor. Then install a local server (**Live Server by Ritwick Dey**). You can search for it under the **Extensions** tab.

In case you are using is **Atom** or **Sublime Text**, please follow the instruction below in order to install a local server plugin.

1. [Sublime Text Live Server](https://youtu.be/5CinAgQylao)
2. [Atom Live Server](https://atom.io/packages/atom-live-server)

![LiveServerbyRitwick](https://github.com/Mberic/hardhat-demo/assets/51446308/ddebd47a-ab48-4a73-ae11-a1ae864bc28a)


Right click the index.html file and choose **Open with Live Server**. This will start the local server and open the HTML file in your default Web browser at http://127.0.0.1:5500/index.html.

![OpenLiveServer](https://github.com/Mberic/hardhat-demo/assets/51446308/dd9b9050-7f0a-4287-8f9b-2603c912db2c)

Please follow the prompts to get the transaction data.

There are buttons on the page. The **Download transaction data** button enables you to download an HTML page which has all the transactions from the start block you indicated to the latest block. The **Balance by DATE** button enables you to get the balance of address at an input date.

## Sample Page 

After inputting an ETH address and a starting block, you should get a page similar to the one below:

![SamplePage](https://github.com/Mberic/hardhat-demo/assets/51446308/19e0facb-88be-4ee7-a3d3-9331c4c473c7)
