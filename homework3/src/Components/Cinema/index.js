import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { auth } from "../../Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCallback, useEffect, useState } from "react";
import './styles.css';





    const Cinema = () => {
        const [user, loading, error] = useAuthState(auth);
        const [data, setData] = useState([]);
        const navigate = useNavigate();



    const getMovieList =  async ()=> {
            const querySnapshot = await getDocs(collection(db, "movies"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setData((prev)=>{
                    return(
                        [
                            ...prev, doc.data()
                        ]
                    )
                });
                
        });
    };

 
    
    useEffect(()=>{
            getMovieList();

    },[])



  return (
    <Container>
      <Row>
        <Col xs>
            <Button className="add-btn" onClick={()=>navigate('/add')} variant="info" size="lg">
            <h3>Add a movie</h3>
            </Button>
        </Col>
        <Col xs={{ order: 12 }}>
          <h1 className="welcome">Välkommen {user?.email}</h1>

        {
            data && data.map((data, index)=>{
                return(
                    <Card className="card-class"  style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg?w=996" />
                    <Card.Body>
                      <Card.Title className="card-title">{data.movieName}</Card.Title>
                      <Card.Text className="card-text">
                        {data.shortDesc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
            })
        }
        
        
        



          
        </Col>
        <Col xs={{ order: 1 }}>
        <Button onClick={()=>{auth.signOut(); navigate('/');}} variant="danger">
              Logga ut
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cinema;
