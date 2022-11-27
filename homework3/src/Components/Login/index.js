import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../Firebase";
import { useNavigate } from 'react-router-dom';
import ErrorModal from "../ErrorModal";
import './styles.css';
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

import Card from 'react-bootstrap/Card';





const Login = (props) => {

  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [data, setData] = useState([]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  


  const signIn = ()=> {
    signInWithEmailAndPassword(auth, email, password)
    .then(auth => {navigate('/home')})
    .catch(error => {console.log(error); handleShowModal(); setErrorText("Fel användarnamn eller lösenord!")})
  }



  const getMovieList =  async ()=> {
    const querySnapshot = await getDocs(collection(db, "movies"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setData((prev)=>{
            return(
                [
                    ...prev, {movieName: doc.data().movieName, shortDesc: doc.data().shortDesc, longDesc: doc.data().longDesc, id: doc.id} 
                ]
            )
        });
        
        
});
};


  const handleOpenMovie = (event)=> {
   const movieId = event.target.value;
   navigate('/movie');

    props.setIdFunc(movieId);
  }



    useEffect(()=>{
        getMovieList();
    },[])



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

          <h1> The movie list</h1>
          {
            data && data.map((data)=>{
                return(  
                    <Card  key={data.id}  className="card-class"  style={{ width: '22rem' }}>
                    <Card.Img   variant="top" src="https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg?w=996" />
                    <Card.Body >
                      <Card.Title  className="card-title">{data.movieName}</Card.Title>
                      <Card.Text  className="card-text">
                        {data.shortDesc}
                      </Card.Text>
                    <Button variant="secondary" onClick={handleOpenMovie} value={data.id}>Read more</Button>
                    </Card.Body>
                  </Card>
                )
            })
        }


        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>

    </Container>
  );
};

export default Login;
