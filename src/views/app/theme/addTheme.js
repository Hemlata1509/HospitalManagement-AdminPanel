/* eslint no-underscore-dangle: 0 */

import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { FormComponent, ModalComponent } from '../formComponent';
import SnackbarModule from '../snackbar';

const AddTheme = ({ isOpen, toggle }) => {
    const [themeDataId, setThemeDataId] = useState('');
    const [themeName, setThemeName] = useState('');
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')

    const save = async () => {
        const themeLayoutData = {
            id: themeDataId,
            themeName,
        }
        await axios(`${process.env.REACT_APP_API}themes/`, {
            method: 'PUT',
            data: themeLayoutData,
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
        console.log(themeLayoutData);
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
                modalHeader="Add New Theme"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>

                        <FormComponent
                            label="Theme ID" placeholder="Enter Theme ID" value={themeDataId}
                            onChange={(e) => setThemeDataId(e.target.value)} type="text"
                        />
                      
                        <FormComponent
                            label="Theme Name" placeholder="Enter Theme Name" value={themeName}
                            onChange={(e) => setThemeName(e.target.value)} type="text"
                        />

                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />
        </div>
    )
}

export default AddTheme;


