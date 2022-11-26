import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { auth } from "../../Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import './styles.css';


const Cinema = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();





  return (
    <Container>
      <Row>
        <Col xs>
            <Button onClick={()=>navigate('/add')} variant="info" size="lg">
            <h3>Add a movie</h3>
            </Button>
        </Col>
        <Col xs={{ order: 12 }}>
          <h1>Välkommen {user?.email}</h1>

        





          <Button onClick={()=>{auth.signOut(); navigate('/');}} variant="danger">
              Logga ut
            </Button>
        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
};

export default Cinema;
