import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import Card from 'react-bootstrap/Card';
import { useEffect , useState } from "react";
import './styles.css';






const MovieComp = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);


    const getTheMovie = async ()=> {
        const docRef = doc(db, "movies", props.id);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(...data, docSnap.data())
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }

    getTheMovie();

        return (
            <Container>
            <Row>
                <Col xs>
                    <Button onClick={()=>navigate('/')} variant="secondary">Go back</Button>
                </Col>
                <Col xs={{ order: 12 }}>
               
             
                    <Card    className="card-class"  style={{ width: '50rem' }}>
                    <Card.Img   variant="top" src="https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg?w=996" />
                    <Card.Body >
                      <Card.Title  className="card-title">Movie name: {data.movieName}</Card.Title>
                      <Card.Text  className="card-text">
                        Short description: {data.shortDesc}
                      </Card.Text>

                      <Card.Text  className="card-text">
                        Long description: {data.longDesc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
           

                </Col>
                <Col xs={{ order: 1 }}></Col>
            </Row>
            </Container>
  );
};

export default MovieComp;
