import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Cinema = () => {


  return (
    <Container>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }}>
          <div>Home of Cinema</div>
        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
};

export default Cinema;
