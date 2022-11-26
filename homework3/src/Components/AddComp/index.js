import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddComp = () => {
   

  return (
    <Container>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }}>
                <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Movie name</Form.Label>
                <Form.Control type="text" placeholder="Enter a name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Short description</Form.Label>
                <Form.Control type="text" placeholder="Write something..." />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Long description</Form.Label>
                <Form.Control type="text" placeholder="Write something..." />
            </Form.Group>

            <Button variant="primary">
                ADD
            </Button>
            </Form>
        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
};

export default AddComp;
