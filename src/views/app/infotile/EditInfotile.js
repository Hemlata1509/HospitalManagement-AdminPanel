/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */

import React, { useState, useEffect } from 'react';
import { Col, Form, FormGroup, Label } from 'reactstrap';
import ChromePicker from 'react-color';
import axios from 'axios';
import SnackbarModule from '../snackbar';
import { ModalComponent, FormComponent } from '../formComponent';


const EditInfotile = ({ isOpen, toggle, InfotileData, infotileId }) => {

    const [bgcolor, setBgColor] = useState('#224822');
    const [bgColorPicker, setBgColorPicker] = useState(false);
    const [id, setId] = useState(null)
    const [foreColor, setForeColor] = useState('#ffffff');
    const [foreColorPicker, setForeColorPicker] = useState(false);
    const [text1, setText] = useState('');
    const [code, setCode] = useState('');
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')

    useEffect(() => {
        InfotileData.map(infotile => {
            if (infotile._id === infotileId) {
                setBgColor(infotile.background);
                setForeColor(infotile.foreground);
                setText(infotile.text);
                setCode(infotile.title);
                setId(infotile._id)
            }
            return infotile;
        })
    }, [InfotileData, infotileId])

    const save = async () => {
        const infotileData = await {
            infoTileId: id,
            background: bgcolor,
            foreground: foreColor,
            title: code,
            text: text1
        }

        await axios(`${process.env.REACT_APP_API}info-tiles/${id}`, {
            method: 'PUT',
            data: infotileData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Infotiles Edited Successfully!!")
                setSeverity('success')
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity('error')
            })
        toggle(!isOpen)
        console.log("infotileData", infotileData);
    }

    const cancel = () => {
        toggle(!isOpen)
    }

    const codeHandlechange = (e) => {
        setCode(e)
    }

    const handleSnackbarClose = () => {
        setOpen(false)
        window.location.reload();
    }

    return (
        <div>
            <SnackbarModule
                open={open}
                message={msg}
                severity={severity}
                handleSnackbarClose={handleSnackbarClose}
            />

            <ModalComponent
                isOpen={isOpen}
                toggle={toggle}
                onModalChange={() => {
                    if (bgColorPicker === true) { setBgColorPicker(false) }
                    if (foreColorPicker === true) { setForeColorPicker(false) }
                }}
                modalHeader="Edit Infotile Information"
                modalBody={
                    <Form style={{ fontSize: '18px', height: '410px', }}>
                        <FormGroup className="mb-5 text-center" row>
                            <Col sm={12} className="d-flex justify-content-center" >
                                <div className="pt-3 p-2"
                                    style={{
                                        position: 'relative',
                                        width: '105px',
                                        height: '105px',
                                        fontSize: '47px',
                                        fontWeight: 'bold',
                                        letterSpacing: '5px',
                                        borderRadius: '10px',
                                        background: `${bgcolor}`,
                                        color: `${foreColor}`,
                                    }}>
                                    {code}</div>
                            </Col>
                        </FormGroup>

                        <FormComponent value={code}
                            label="Infotile Code :" type="text" placeholder="Enter code" maxLength='2'
                            onChange={(e) => { codeHandlechange(e.target.value.toUpperCase()) }}
                        />

                        <FormComponent value={text1}
                            label="Infotile Name :" type="text" placeholder="Enter Name"
                            onChange={(e) => setText(e.target.value)}
                        />

                        <FormGroup className="mb-3" row >
                            <Label sm={3}>
                                Background:
                            </Label>
                            <Col sm={1} className="mt-2">
                                <icon
                                    className="bi bi-square-fill"
                                    type="color"
                                    onClick={() => { setBgColorPicker(true) }}
                                    style={{ color: `${bgcolor}` }}
                                />
                            </Col>
                            <Label sm={3}> {bgcolor}</Label>
                            {
                                bgColorPicker &&
                                <ChromePicker
                                    color={bgcolor}
                                    onChangeComplete={updatedColor => setBgColor(updatedColor.hex)}

                                />
                            }
                        </FormGroup>
                        <FormGroup className="" row >
                            <Label sm={3}>ForeColor:</Label>
                            <Col sm={1} className="mt-2">
                                <icon
                                    className="bi bi-square-fill"
                                    onClick={() => { setForeColorPicker(true) }}
                                    style={{ color: `${foreColor}` }}
                                />
                            </Col>
                            <Label sm={3}> {foreColor}</Label>
                            {
                                foreColorPicker &&
                                <ChromePicker
                                    color={foreColor}
                                    onChangeComplete={updatedColor => setForeColor(updatedColor.hex)}
                                />
                            }
                        </FormGroup>

                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />

        </div>
    )
}

export default EditInfotile;



