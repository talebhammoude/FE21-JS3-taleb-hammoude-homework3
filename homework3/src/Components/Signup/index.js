import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../Firebase";

import ErrorModal from "../ErrorModal";


class Signup extends React.Component {


 

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      showModal: false,
      errorText: ''
    }
  }

  
  handleCloseModal = () => this.setState({showModal: false});
  handleShowModal = () => this.setState({showModal: true});
  


  signUp = ()=> {
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
    .then(auth => {window.location.replace("/");})
    .catch(error => {console.log(error); this.handleShowModal();  this.setState({errorText: "E-postadressen finns redan, välj en annan!"})})
  }


  render(){

    return (
      <Container>
      <ErrorModal showmodal = {this.state.showModal}  handleCloseModal={this.handleCloseModal}  errorText={this.state.errorText}/>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Skapa ny e-postadress</Form.Label>
              <Form.Control onChange={(event)=>{this.setState({email:event.target.value })}} type="email" placeholder="Ange e-postadress" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Välj ett lösenord</Form.Label>
              <Form.Control onChange={(event)=>{this.setState({password:event.target.value })}} type="password" placeholder="Ange ett lösenord" />
            </Form.Group>

            <Button onClick={this.signUp} variant="warning">
              Skapa kontot!
            </Button>
          </Form>
        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
  }
    

}


export default Signup;