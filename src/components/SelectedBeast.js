import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SelectedBeast({modalOpen, toggleModal}) {
  return (
    <>
      <Button onClick={toggleModal}>
          MODAL BUTTON
      </Button>
      <Modal show={modalOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          This is the Modal Header
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>
            Modal Title
          </Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={toggleModal}>
              Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SelectedBeast;
