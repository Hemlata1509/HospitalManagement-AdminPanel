import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ModalBlock = (props) => {

    const { isOpen, toggle, title, body, onSubmitClick, onCancelClick, button1, button2 } = props;

    return (
        // <div>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader className="bg-primary" style={{ justifyContent: 'center' }}>
                {title}
            </ModalHeader>
            <ModalBody>
                {body}
            </ModalBody>
            <ModalFooter>
                <button type="submit" className="bg-primary" onClick={onSubmitClick} style={{ border: 'none', borderRadius: "10px", padding: "10px 20px" }}>
                    {button1}
                </button>
                <button type="button" className="bg-primary" onClick={onCancelClick} style={{ border: 'none', borderRadius: "10px", padding: "10px 20px" }}>
                    {button2}
                </button>
            </ModalFooter>
        </Modal>
        // </div>
    );
};

export default ModalBlock;
