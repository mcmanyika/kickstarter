import React, { Component } from 'react';

import { Card, Button, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import { user } from '../firebase/useUser';

class CampaignIndex extends Component {

    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns)

        return {campaigns};
    }
    
    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                description: (
                    <Link route={`/campaigns/${address}`}>
                    <a><h3>{address}</h3></a>
                </Link>
                ),
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    }
    
    render() {
        return (
            <Layout>
                <div>
                    {this.renderCampaigns()}    
                </div>
            </Layout>
        )}
}

export default CampaignIndex;