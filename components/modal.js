import React from "react";
import Modal from 'react-modal';

const OptModal = (props) => (
    <Modal
    isOpen = {props.modalOpt}
    contentLabel = "Selected Option"
    onRequestClose={props.closeModal}
    >
        <h3>Some Modal</h3>
        {props.modalOpt && <p>{props.modalOpt}</p>}
        <button onClick={props.closeModal}>Okay</button>
        
    </Modal>
)
export default OptModal