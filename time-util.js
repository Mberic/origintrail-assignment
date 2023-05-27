import { Alchemy, Utils } from 'alchemy-sdk';
import EthDater from 'ethereum-block-by-date';

const apiKey = "bLOQXMCKxwCUQakDFFQmjZzGfUIvjxpy";
const settings = {
    apiKey: apiKey
};

const alchemy = new Alchemy(settings);

const dater = new EthDater(
    alchemy.core // Ethers provider, required.
);

const main = async () => {

    // Set wallet address
    const address = '0xaDb7fC24BbEaF6af359d2d4b1c5AB97013B26a63';

    // Set timestamp
    const timestamp = '2022-07-20T13:20:40Z';

    // Get blocknumber 
    let block = await dater.getDate(timestamp);
    block = block['block']

    // Get balance and format in terms of ETH
    let balance = await alchemy.core.getBalance(address, block);
    balance = Utils.formatEther(balance);
    console.log(`Balance of ${address}: ${balance} ETH`);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
