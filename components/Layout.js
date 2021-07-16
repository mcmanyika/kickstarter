
import React from 'react';

import { useUser } from '../firebase/useUser';
import Header from './Header';
import Home from '../pages/login';
import 'semantic-ui-css/semantic.min.css';
import Head from 'next/head';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from 'semantic-ui-react';


export default props => {

  const { user, logout } = useUser()
  

    return (
        <>
        <Home user={user} logout={logout} />
        <Container>
            <Head></Head>
            {props.children}
        </Container>
        </>
    )
}