import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../Firebase";



const AddComp = () => {
   

    const navigate = useNavigate();




    const addMovie = async ()=> {
    
        try {
            const docRef = await addDoc(collection(db, "movies"), {
              movieName: document.querySelector("#movie-name").value,
              shortDesc: document.querySelector("#short-desc").value,
              longDesc: document.querySelector("#long-desc").value,
            });
            console.log("Document written with ID: ", docRef.id);
            navigate('/home');
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        
    }



  return (
    <Container>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }}>
                <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Movie name</Form.Label>
                <Form.Control id="movie-name" type="text" placeholder="Enter a name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Short description</Form.Label>
                <Form.Control id="short-desc" type="text" placeholder="Write something..." />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Long description</Form.Label>
                <Form.Control id="long-desc" type="text" placeholder="Write something..." />
            </Form.Group>

            <Button onClick={addMovie} variant="info">
                <h5>ADD</h5>
            </Button>
            </Form>
        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
};

export default AddComp;
