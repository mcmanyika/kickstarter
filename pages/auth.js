import FirebaseAuth from '../components/auth/FirebaseAuth';
import 'semantic-ui-css/semantic.min.css'
import { Header, Container, Button, Grid } from 'semantic-ui-react'

const Auth = () => {
    return (
        <Container 
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <FirebaseAuth />
            </div>
        </Container>
    )
}

export default Auth
