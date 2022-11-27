import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../Firebase";
import { useNavigate } from 'react-router-dom';
import ErrorModal from "../ErrorModal";
import './styles.css';


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorText, setErrorText] = useState("");


  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  


  const signIn = ()=> {
    signInWithEmailAndPassword(auth, email, password)
    .then(auth => {navigate('/home')})
    .catch(error => {console.log(error); handleShowModal(); setErrorText("Fel användarnamn eller lösenord!")})
  }


  return (
    <Container>
      <ErrorModal showmodal = {showModal}  handleCloseModal={handleCloseModal}  errorText={errorText}/>
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
          <h3>Har du inget konto?</h3>
          <Button className="create-btn" onClick={()=>navigate('/register')} variant="warning">Skapa nytt konto</Button>




        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>

    </Container>
  );
};

export default Login;
