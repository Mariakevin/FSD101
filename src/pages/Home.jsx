import React from 'react'
import { Container, Button} from 'react-bootstrap'
import "../styles/Home.css"
const Home = () => {
  return (
    <Container>
            <h1>Welcome to our Web Project!</h1>
            <p>We are here to showcase our project</p>
            <Button variant="primary" type="submit">
                Get started
            </Button>
    </Container>
  )
}

export default Home