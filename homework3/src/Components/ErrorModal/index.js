import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ErrorModal = (props) => {



  return (
    <>
      <Modal show={props.showmodal} onHide={props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ErrorModal;