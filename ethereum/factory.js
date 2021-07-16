import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4F9AE3cef1Dc7Ab51fA0304D107A82acFCCF266F'
);

export default instance;