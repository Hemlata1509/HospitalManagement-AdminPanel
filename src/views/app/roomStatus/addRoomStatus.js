import axios from 'axios';
import React, { useState } from 'react';
import { Form, } from 'reactstrap';
import { FormComponent, ModalComponent } from '../formComponent';
import SnackbarModule from '../snackbar';

const AddRoomStatus = ({ isOpen, toggle }) => {
    const [roomId, setRoomId] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [foreground, setForeground] = useState('');
    const [background, setBackground] = useState('');
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')

    const handleSnackbarClose = () => {
        setOpen(false);
        window.location.reload();
    }

    const save = async () => {
        const dataRoomStatus = {
            id: roomId,
            title,
            text,
            foreground,
            background,
        }
        console.log(dataRoomStatus);
        await axios(`${process.env.REACT_APP_API}room-status/`, {
            method: 'POST',
            data: dataRoomStatus,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Room Status Added Successfully!")
                setSeverity("success")
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity("error")
            })
        toggle(!isOpen)
    }

    const cancel = () => {
        toggle(!isOpen)
    }

    return (
        <div>
            <SnackbarModule
                open={open}
                message={msg}
                handleSnackbarClose={handleSnackbarClose}
                severity={severity}
            />

            <ModalComponent
                isOpen={isOpen}
                toggle={toggle}
                modalHeader="Add New Room Status"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>
                        <FormComponent
                            label="Room ID :" type="text" placeholder="Enter Room ID"
                            onChange={(e) => setRoomId(e.target.value)}
                        />

                        <FormComponent
                            label="Title :" type="text" placeholder="Enter Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <FormComponent
                            label="Foreground :" type="text" placeholder="Enter Foreground"
                            onChange={(e) => setForeground(e.target.value)}
                        />

                        <FormComponent
                            label="Background :" type="text" placeholder="Enter Background"
                            onChange={(e) => setBackground(e.target.value)}
                        />

                        <FormComponent
                            label="Description :" type="text" placeholder="Enter Description"
                            onChange={(e) => setText(e.target.value)}
                        />

                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />
        </div>
    )
}

export default AddRoomStatus;


