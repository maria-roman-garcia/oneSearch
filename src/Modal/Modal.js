import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Card, CardTitle, CardText } from 'reactstrap';
import "./Modal.css";
import CardItem from './CardItem';

const ModalExample = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
     <div>
      <Button color="info" className="boton" onClick={toggle}>
        Contáctanos
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {/* <ModalHeader toggle={toggle} Contáctanos /> */}
        <ModalBody className="bodyModal">
          Si quieres saber más sobre nosotras, no dudes en visitarnos en nuestro
          perfil de LinkedIn. <br></br><br></br>
          {/* <a href="http://www.google.com" className="links">María</a> | <a href="http://www.google.com" className="links">Leire</a> | <a href="http://www.google.com" className="links">Natalia</a>  */}
           <CardItem/>
        </ModalBody>
      </Modal>
      
    </div>
  );
};

export default ModalExample;

