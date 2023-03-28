import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalLogin = ({show, handleClose}) => {
 
  return (
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className='formModal'>
            <label className="label leters">Correo</label>
            <input placeholder='Ingrese su correo' className="form-input border" type='email' required/>

            <label className="label leters">Contraseña</label>
            <input placeholder="Ingrese su apellido" type="text"  className='form-input border' required/>

            <a href='#' className='forgotPassword'>¿Olvidaste tu Contraseña?</a>

          </Container>
        </Modal.Body>
        <Modal.Footer className='buttonModal'>
          <Button variant="primary" onClick={handleClose}>
            Iniciar
          </Button>
        </Modal.Footer>
      </Modal>

  );
}

export default ModalLogin;

