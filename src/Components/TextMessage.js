import React, {useState, props, onHide} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, render} from "react-bootstrap";
import styles from "../App.css";



function TextMessage() {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 return (
    <>
 <style type="text/css">
    {`
    .btn-flat {
      background-color: black;
      color: white;
display: flex;
position: center;

    `}
  </style>
      <Button variant="flat" onClick={handleShow}>
      Use in a sentence
      </Button>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose} animation={false}>
        <Modal.Body >
        <div position="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/o2Wtvvc-Hls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TextMessage;