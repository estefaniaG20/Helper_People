import React, {useState} from "react";
import  ModalLogin  from "../Home/Modal/ModalLogin";

export const Title = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
    <div className="header">
      <div className="tituloa">
        <h1>Helper People</h1>
      </div>
      <div className="divHeader">
            <button href="#" className="bottom1" onClick={handleShow}>LOGIN</button>
            <a href="about-us" className="bottom">QUIENES SOMOS</a>
            <a href="know-us" className="bottom">CONOCENOS</a>
      </div>
    </div>
    <ModalLogin show={show} handleClose={handleClose} />
    </>
    );
  }
