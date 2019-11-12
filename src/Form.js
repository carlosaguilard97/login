import React, { Component, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

export class Form extends Component {
  render() {
    function Modal(){
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      return (
        <div>
          <button variant="primary" onClick={handleShow}>
          Launch demo modal
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}
}


export default Form;
