import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  const signIn = ()=> {
    console.log(email + password);
  }


  return (
    <Container>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ange e-postadress</Form.Label>
              <Form.Control onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder="E-postadress" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ange lösenordet</Form.Label>
              <Form.Control onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Lösenordet" />
            </Form.Group>

            <Button onClick={signIn} variant="success">
              Logga in
            </Button>
          </Form>
        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
};

export default Login;
