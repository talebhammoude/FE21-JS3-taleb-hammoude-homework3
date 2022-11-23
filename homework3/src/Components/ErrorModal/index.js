import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ErrorModal = (props) => {



  return (
    <>
      <Modal show={props.showmodal} onHide={props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Fel användarnamn eller lösenord!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Jag förstår
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ErrorModal;