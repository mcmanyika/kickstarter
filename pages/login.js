import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import { Header, Container, Grid , Menu} from 'semantic-ui-react'
import styles from '../styles/Home.module.css'
import { useUser } from '../firebase/useUser';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from '../routes'

export default function Home(props) {

  if (props.user) {
    return (
    <>
      <Header block>
        <Container>
          <Grid>
            <Grid.Column  as='h2'  floated='left' width={5}>
            <Link route="/">
                <a className="item">
                MUKANDO
                </a>
              </Link>
            </Grid.Column>
            <Grid.Column  textAlign='right'  floated='right' width={7}>

            {props.user.name}
            <Link route="/campaigns/new">
              <a className="item">
                Campaigns
              </a>
            </Link>
              <Link route="/campaigns/new">
                <a className="item">
                  +
                </a>
              </Link>
              <Button onClick={() => props.logout()}> Log Out</Button>
            </Grid.Column>
          </Grid>
        </Container>
      </Header>
    </>
    )
  }

  else return (
    <>
      <Header as='h2' block>
        <Container>
          <Grid>
            <Grid.Column  floated='left' width={5}>
                MUKANDO
            </Grid.Column>
            <Grid.Column textAlign='right'  floated='right' width={5}>
            <a href="/auth"><Button>Log In!</Button></a>
            </Grid.Column>
          </Grid>
        </Container>
      </Header>
    </>
    
  )
}
