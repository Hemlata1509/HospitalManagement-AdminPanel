/* eslint no-underscore-dangle: 0 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, } from 'reactstrap';
import { FormComponent, ModalComponent } from '../formComponent';
import SnackbarModule from '../snackbar';

const EditRoomStatus = ({ isOpen, toggle, roomid, roomStatusData }) => {
    const [roomId, setRoomId] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [foreground, setForeground] = useState('');
    const [background, setBackground] = useState('');
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')

    useEffect(() => {
        roomStatusData.map(room => {
            if (room._id === roomid) {
                setRoomId(room.id)
                setTitle(room.title)
                setText(room.text)
                setForeground(room.foreground)
                setBackground(room.background)
                // setObjectId(room._id)
            }
            return room;
        })
    }, [roomid, roomStatusData])

    const save = async () => {
        const dataRoomStatus = {
            id: roomId,
            title,
            text,
            foreground,
            background,
        }
        await axios(`${process.env.REACT_APP_API}room-status/${roomid}`, {
            method: 'PUT',
            data: dataRoomStatus,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Room Status Edited Successfully!")
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
    const handleSnackbarClose = () => {
        setOpen(false);
        window.location.reload();
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
                modalHeader="Edit Room Status Information"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>
                        <FormComponent
                            label="Room ID :" type="text" placeholder="Enter Room ID"
                            onChange={(e) => setRoomId(e.target.value)} value={roomId}
                        />

                        <FormComponent
                            label="Title :" type="text" placeholder="Enter Title"
                            onChange={(e) => setTitle(e.target.value)} value={title}
                        />

                        <FormComponent
                            label="Foreground :" type="text" placeholder="Enter Foreground"
                            onChange={(e) => setForeground(e.target.value)} value={foreground}
                        />

                        <FormComponent
                            label="Background :" type="text" placeholder="Enter Background"
                            onChange={(e) => setBackground(e.target.value)} value={background}
                        />

                        <FormComponent
                            label="Description :" type="text" placeholder="Enter Description"
                            onChange={(e) => setText(e.target.value)} value={text}
                        />

                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />
        </div>
    )
}

export default EditRoomStatus;


