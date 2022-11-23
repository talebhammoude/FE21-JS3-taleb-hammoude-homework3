import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../Firebase";
import { useNavigate } from 'react-router-dom';


const Signup = ()=> {


  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  const signUp = ()=> {
    createUserWithEmailAndPassword(auth, email, password)
    .then(auth => {navigate('/');})
    .catch(error => console.log(error))
  }


    return (
        <Container>
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Registrera nytt konto!</Form.Label>
                <Form.Control onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder="Ange e-postadress" />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Vilket lösenord ska du ha?</Form.Label>
                <Form.Control onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Ange ett lösenord" />
              </Form.Group>
  
              <Button onClick={signUp} variant="warning">
                Skapa kontot!
              </Button>
            </Form>
          </Col>
          <Col xs={{ order: 1 }}></Col>
        </Row>
      </Container>
    );

}


export default Signup;