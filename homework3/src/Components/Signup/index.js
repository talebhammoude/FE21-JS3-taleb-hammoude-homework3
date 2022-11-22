import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Signup = ()=> {

    return (
        <Container>
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Registrera nytt konto!</Form.Label>
                <Form.Control type="email" placeholder="Ange e-postadress" />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Vilket lösenord ska du ha?</Form.Label>
                <Form.Control type="password" placeholder="Ange ett lösenord" />
              </Form.Group>
  
              <Button variant="warning" type="submit">
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