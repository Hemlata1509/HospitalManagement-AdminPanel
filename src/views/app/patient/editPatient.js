/* eslint-disable react-hooks/exhaustive-deps */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable  jsx-a11y/no-static-element-interactions */
/* eslint-disable  array-callback-return */
/* eslint-disable  no-unneeded-ternary */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Form, FormGroup, Label, CustomInput } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import { FormComponent, ModalComponent, styleDropdown } from '../formComponent';
import SnackbarModule from '../snackbar';


const languageList = [
    { key: '1', value: 'English' },
    { key: '2', value: 'Hindi' },
    { key: '3', value: 'France' },
    { key: '4', value: 'Other' },
]
const infotilesList = []
const medicationList = []

const AddPatient = ({ isOpen, toggle, patientid, patientData }) => {
    const [objectid, setObjectId] = useState('')
    const [patientId1, setPatientId1] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [race, setRace] = useState('');
    const [dob, setDob] = useState('');
    const [acNum, setAcNum] = useState('');
    const [sex, setSex] = useState('')
    const [language, setLanguage] = useState('')
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')
    const [infotiles, setInfotiles] = useState([])
    const [infotilesID, setInfotilesID] = useState([])
    const [medication, setMedication] = useState([])
    const [medicationID, setMedicationID] = useState([])

    const [flagPatientID, setFlagPatientID] = useState(0)
    const [flagFirstName, setFlagFirstName] = useState(0)
    const [flagLastname, setFlagLastname] = useState(0)
    const [flagRace, setFlagRace] = useState(0)
    const [flagDOB, setFlagDOB] = useState(0)
    const [flagACNum, setFlagACNum] = useState(0)
    const [flagSex, setFlagSex] = useState(0)
    const [flagLanguage, setFlagLanguage] = useState(0)
    const [flagInfotiles, setFlagInfotiles] = useState(0)
    const [flagMedication, setFlagMedication] = useState(0)

    const infotilesData = useSelector(state => state.infotiles.infotilesData);
    const medicationData = useSelector(state => state.medication.medicationData)
    const date = new Date().toDateString();

    useEffect(() => {
        patientData.map(patient => {
            if (patient._id === patientid) {
                setPatientId1(patient.patientId);
                setFirstName(patient.patientFirstName);
                setLastName(patient.patientLastName);
                setRace(patient.patientRace);
                setDob(patient.patientDateOfBirth);
                setAcNum(patient.patientAccountNum);
                setSex(patient.patientSex);
                setLanguage(patient.patientPrimaryLanguage);
                setObjectId(patient._id);
                setInfotiles(patient.infoTiles ? patient.infoTiles.map((pt) => pt.text) : [])
                setInfotilesID(patient.infoTiles ? patient.infoTiles.map((pt) => pt._id) : [])
                setMedication(patient.medication ? patient.medication.map((med) => med.medicationId.name) : [])
            }
            return patient;
        })
    }, [patientid, patientData])

    useEffect(() => {
        infotilesData.map((info) => {
            infotilesList.push({
                key: info._id, value: info.text,
            })
            return infotilesList;
        })
        let res = [];
        infotilesData.map((infot) => {
            return infotiles.map((data) => {
                if (data === infot.text) {
                    res = [...res, infot._id]
                }
                return res
            })
        })
        setInfotilesID(res)
    }, [infotiles])

    useEffect(() => {
        medicationData.map((med) => {
            medicationList.push({
                key: med._id,
                value: med.name
            })
            return medicationList
        })
        let res = []
        medicationData.map((med) => {
            return medication.map((data) => {
                if (data === med.name) {
                    res = [...res, med._id]
                }
                return res;
            })
        })
        setMedicationID(res)
    }, [medication])

    const save = async () => {
        const dataPatient = {}
        if (flagPatientID === 1) {
            dataPatient.patientId = patientId1
        }
        if (flagFirstName === 1) {
            dataPatient.patientFirstName = firstName
        }
        if (flagLastname === 1) {
            dataPatient.patientLastName = lastName
        }
        if (flagLanguage === 1) {
            dataPatient.patientPrimaryLanguage = language
        }
        if (flagRace === 1) {
            dataPatient.patientRace = race
        }
        if (flagDOB === 1) {
            dataPatient.patientDateOfBirth = dob
        }
        if (flagACNum === 1) {
            dataPatient.patientAccountNum = acNum
        }
        if (flagSex === 1) {
            dataPatient.patientSex = sex
        }
        if (flagInfotiles === 1) {
            dataPatient.infoTiles = infotilesID
        }
        if (flagMedication === 1) {
            const array = [];
            medicationID.map((med) => {
                array.push({
                    time: date,
                    medicationId: med
                })
                return array;
            })
            dataPatient.medication = array
        }
        await axios(`${process.env.REACT_APP_API}patients/${objectid}`, {
            method: 'PUT',
            data: dataPatient,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Patient Edited Successfully!")
                setSeverity("success")
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity("error")
            })
        toggle(!isOpen)
        console.log(dataPatient);
    }

    const handleSnackbarClose = () => {
        setOpen(false);
        // window.location.reload();
    }
    const cancel = () => {
        toggle(!isOpen)
    }

    const handleInfotilesChange = (e) => {
        const { target: { value } } = e;
        setFlagInfotiles(1)
        setInfotiles(typeof value === 'string' ? value.split(',') : value);
    }

    const handleMedicationChange = (e) => {
        const { target: { value } } = e;
        setFlagMedication(1)
        setMedication(typeof value === 'string' ? value.split(',') : value);
    }


    const displayInfotilesDropdown = () => {
        let res;
        if (infotilesData === []) {
            res = <Select className="bg-primary">
                <MenuItem value="No Infotiles">
                    No Theme Found
                </MenuItem>
            </Select>
        } else {
            const obj = [...new Map(infotilesList.map(item => [
                JSON.stringify(item), item
            ])).values()]
            res = <Select className="bg-primary" multiple displayEmpty
                value={infotiles} style={styleDropdown}
                onChange={(e) => { handleInfotilesChange(e); }}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <b>None</b>
                    }
                    return selected.join(', ')
                }}
            >
                <MenuItem value="">
                    <b>None</b>
                </MenuItem>
                {obj.map((data) => {
                    return <MenuItem value={data.value} key={data.key} id={data.key}>
                        <Checkbox checked={infotiles.indexOf(data.value) > -1} />
                        <ListItemText primary={data.value} />
                    </MenuItem>
                })
                }
            </Select >
        }
        return res
    }

    const displayMedicationDropdown = () => {
        let res;
        if (medicationData === []) {
            res = <Select className="bg-primary"><MenuItem>No Medication</MenuItem></Select>
        } else {
            const obj = [...new Map(medicationList.map(item => [
                JSON.stringify(item), item
            ])).values()]
            res = <Select className="bg-primary" multiple displayEmpty value={medication}
                style={styleDropdown}
                onChange={handleMedicationChange} renderValue={selected => {
                    if (selected.length === 0) { return <b>None</b> }
                    return selected.join(', ')
                }}
            >
                {obj.map(med => {
                    return <MenuItem key={med.key} value={med.value}>
                        <Checkbox checked={medication.indexOf(med.value) > -1} />
                        <ListItemText primary={med.value} />
                    </MenuItem>
                })}
            </Select>
        }
        return res;
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
             modalHeader="Edit Patient Information"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>

                        <FormComponent
                            type="text" placeholder="Enter Patient ID" label="Patient ID :" value={patientId1}
                            onChange={(e) => { setPatientId1(e.target.value); setFlagPatientID(1) }}
                        />

                        <FormComponent
                            type="text" placeholder="Enter Patient ID" label="Patient ID :" value={firstName}
                            onChange={(e) => { setFirstName(e.target.value); setFlagFirstName(1) }}
                        />

                        <FormComponent
                            type="text" placeholder="Enter Patient ID" label="Patient ID :" value={lastName}
                            onChange={(e) => { setLastName(e.target.value); setFlagLastname(1) }}
                        />

                        <FormGroup className="mb-4" row>
                            <Label sm={3}>Language :</Label>
                            <Col style={{ marginLeft: '5px' }}>
                                <Select className="bg-primary" value={language}
                                    style={{ borderRadius: '15px', fontSize: '18px', color: 'white', width: '50%' }}
                                    onChange={(e) => { setLanguage(e.target.value); setFlagLanguage(1) }}
                                >
                                    {languageList.map((lang) =>
                                        <MenuItem key={lang.key} value={lang.value} style={{ fontSize: '18px' }} >
                                            {lang.value}
                                        </MenuItem>
                                    )}
                                </Select>
                            </Col>
                        </FormGroup>

                        <FormGroup className="mb-4" row>
                            <Label sm={3}> Race :</Label>
                            <CustomInput type="radio" value="Black" name="race" label="Black" checked={race === 'Black'} onChange={() => { setRace("Black"); setFlagRace(1) }} />
                            <CustomInput className="mx-5" type="radio" value="White" name="race" label="White" checked={race === 'White'} onChange={() => { setRace("White"); setFlagRace(1) }} />
                            <CustomInput type="radio" value="Other" name="race" label="Other" checked={race === 'Other'} onChange={() => { setRace("Other"); setFlagRace(1) }} />
                        </FormGroup>

                        <FormComponent
                            type="text" placeholder="Enter Patient ID" label="Patient ID :" value={dob}
                            onChange={(e) => { setDob(e.target.value); setFlagDOB(1) }}
                        />

                        <FormComponent
                            type="text" placeholder="Enter Patient ID" label="Patient ID :" value={acNum}
                            onChange={(e) => { setAcNum(e.target.value); setFlagACNum(1) }}
                        />

                        <FormGroup className="mb-4" row>
                            <Label sm={4}> Sex :</Label>
                            <CustomInput type="radio" value="Male" name="gender" label="Male" checked={sex === 'Male'} onChange={() => { setSex("Male"); setFlagSex(1) }} />
                            <CustomInput className="mx-5" type="radio" value="Female" name="gender" label="Female" checked={sex === 'Female'} onChange={() => { setSex("Female"); setFlagSex(1) }} />
                            <CustomInput type="radio" value="Other" name="gender" label="Other" checked={sex === 'Other'} onChange={() => { setSex("Other"); setFlagSex(1) }} />
                        </FormGroup>

                        <FormGroup className="mb-4" row>
                            <Label sm={4}>Assign InfoTiles :</Label>
                            <Col>
                                {displayInfotilesDropdown()}
                            </Col>
                        </FormGroup>

                        <FormGroup className="mb-4" row>
                            <Label sm={4}>Assign Medication :</Label>
                            <Col>
                                {displayMedicationDropdown()}
                            </Col>
                        </FormGroup>

                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />

        </div>
    )
}

export default AddPatient;


