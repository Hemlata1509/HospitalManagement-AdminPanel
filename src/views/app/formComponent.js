import React from 'react'
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Select } from '@mui/material';

export const styleDropdown = {
    borderRadius: '15px',
    fontSize: '18px',
    color: 'white',
    height: '75%',
    width: '85%',
    marginLeft: '-25px'
}

export const FormComponent = ({maxLength, value, label, type, onChange, placeholder }) => {
    return (
        <div>
            <FormGroup className="mb-4" row>
                <Label sm={4}>{label}</Label>
                <Col sm={7}>
                    <Input
                        value={value} maxLength={maxLength}
                        type={type}
                        onChange={onChange}
                        placeholder={placeholder}
                        style={{
                            fontSize: '18px', borderRight: '0', borderTop: '0',
                            borderLeft: '0', borderBottom: `4px solid primary`, borderRadius: '10px',
                        }}
                    />
                </Col>
            </FormGroup>
        </div>
    )
}

export const SelectComponent = ({ value, onChange, renderValue }) => {
    return (
        <div>
            <Select className="bg-primary" value={value} displayEmpty
                onChange={onChange} renderValue={renderValue}
                style={{
                    borderRadius: '15px', fontSize: '18px', color: 'white',
                    height: '75%', width: '50%'
                }}
            />
        </div>
    )
}

export const ModalComponent = ({ isOpen, toggle, modalHeader, modalBody, onSaveClick, onCancelClick, onModalChange }) => {
    return (
        <div>
            <Modal size="lg" style={{ maxWidth: '570px', width: '100%' }} isOpen={isOpen} toggle={toggle} onClick={onModalChange}>
                <ModalHeader className="bg-primary d-flex justify-content-center mb-3">
                    <h2 style={{ fontSize: '27px', margin: '-5px', letterSpacing: '1px' }}>
                        {modalHeader}
                    </h2>
                </ModalHeader>
                <ModalBody>{modalBody}</ModalBody>
                <ModalFooter style={{ borderBottom: '-25px' }} >
                    <Button type="submit" className="p-2 px-4" color="primary"
                        style={{ borderRadius: '15px', fontSize: '15px' }}
                        onClick={onSaveClick}>
                        SAVE
                    </Button>{'   '}
                    <Button color="secondary" style={{ borderRadius: '15px', fontSize: '15px' }}
                        onClick={onCancelClick}>
                        CANCEL
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}