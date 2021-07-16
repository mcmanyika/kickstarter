import Web3 from 'web3';

let web3js;

if (typeof window !== 'undefined' && typeof window.web3js !== 'undefined' ) {
    // We are in browser and metamask is running
    // const web3 = new Web3(window.web3.currentProvider);
    const web3js = new Web3(window.ethereum);
    window.eth_requestAccounts;
} else {
    // We are on the server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/16697f3c94754b18828da39e491a4ad1'
    );

    web3js = new Web3(provider);
}

export default web3js;
