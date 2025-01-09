const ethers = require("ethers");



async function main() {

    //const mainnet_provider = ethers.getDefaultProvider("mainnet");
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

    const signer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider)
    console.log("Signer Address is :", signer.address);

    const receiver = "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720";

    const tx = {
        to: receiver,
        value: ethers.parseEther("100.0")
    };

    const response = await signer.sendTransaction(tx);
    console.log('Response: ', response);

    const balance = await provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    console.log("Balance is :", ethers.formatEther(balance)); // 1 ETH == 1 * 10^18 wei


    const balance_of_receiver = await provider.getBalance(receiver);
    console.log("Receiver balance is :", ethers.formatEther(balance_of_receiver)); 
}



main().then().catch((error) => {
    console.log(error);
});