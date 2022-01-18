/* eslint no-underscore-dangle: 0 */

import { Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Form, FormGroup, Label, CustomInput, } from 'reactstrap';
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
// const alertList = []

const AddPatient = ({ isOpen, toggle }) => {
    const [patientId1, setPatientId1] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [race, setRace] = useState('Black');
    const [dob, setDob] = useState('');
    const [acNum, setAcNum] = useState('');
    const [sex, setSex] = useState('Male')
    const [language, setLanguage] = useState('English')
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')
    const [infotiles, setInfotiles] = useState([])
    const [infotilesID, setInfotilesID] = useState([])
    const [medication, setMedication] = useState([])
    const [medicationID, setMedicationID] = useState([])
    // const [alert, setAlert] = useState([])
    // const [alertId, setAlertId] = useState([])

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
    // const [flagAlert, setFlagAlert] = useState(0)

    const infotilesData = useSelector(state => state.infotiles.infotilesData);
    const medicationData = useSelector(state => state.medication.medicationData);
    // const alertData = useSelector(state => state.alert.alertData);
    const date = new Date().toDateString();

    useEffect(() => {
        infotilesData.map((info) => {
            const id = info._id;
            const { text } = info
            infotilesList.push({
                key: id, value: text
            })
            return infotilesList;
        })

        medicationData.map((med) => {
            medicationList.push({
                key: med._id,
                value: med.name
            })
            return medicationList;
        })

        let res = [];
        infotilesData.map((infot) => {
            return infotiles.map((dat) => {
                if (dat === infot.text) {
                    res = [...res, infot._id]
                }
                return res
            })
        })
        setInfotilesID(res)
    }, [infotiles])

    useEffect(() => {
        let res = [];
        medicationData.map((med) => {
            return medication.map((m) => {
                if (m === med.name) {
                    res = [...res, med._id]
                    console.log("Response", res);
                }
                return res
            })
        })
        setMedicationID(res)
        // console.log(res.length);
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
        if (flagLanguage === 1 || flagLanguage === 0) {
            dataPatient.patientPrimaryLanguage = language
        }
        if (flagRace === 1 || flagRace === 0) {
            dataPatient.patientRace = race
        }
        if (flagDOB === 1) {
            dataPatient.patientDateOfBirth = dob
        }
        if (flagACNum === 1) {
            dataPatient.patientAccountNum = acNum
        }
        if (flagSex === 1 || flagSex === 0) {
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
                return array
            })
            dataPatient.medication = array
        }
        console.log(dataPatient);
        await axios(`${process.env.REACT_APP_API}patients/`, {
            method: 'POST',
            data: dataPatient,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Patient Added Successfully!")
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
        setInfotiles(typeof value === 'string' ? value.split(',') : value)
        setFlagInfotiles(1)
    }

    const handleMedicationChange = (e) => {
        const { target: { value } } = e;
        setMedication(typeof value === 'string' ? value.split(',') : value)
        setFlagMedication(1)
    }

    const displayInfotilesDropdown = () => {
        let res;
        if (infotilesData === []) {
            res = <Select className="bg-primary">
                <MenuItem value="No Infotiles">No Theme Found</MenuItem>
            </Select>
        } else {
            const obj = [...new Map(infotilesList.map(item => [
                JSON.stringify(item), item
            ])).values()]
            res = <Select className="bg-primary" multiple displayEmpty onChange={handleInfotilesChange}
                value={infotiles} style={styleDropdown}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <b>None</b>;
                    }
                    return selected.join(', ');
                }}
            >
                <MenuItem value="">
                    <b>None</b>
                </MenuItem>
                {obj.map((data) => {
                    return <MenuItem key={data.key} value={data.value}>
                        <Checkbox checked={infotiles.indexOf(data.value) > -1} />
                        <ListItemText primary={data.value} />
                    </MenuItem>
                })
                }
            </Select>
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
                onChange={handleMedicationChange} renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <b>None</b>
                    } return selected.join(', ')
                }}
            >
                <MenuItem> <b>None</b> </MenuItem>
                {obj.map((med) => {
                    return <MenuItem key={med.key} value={med.value}>
                        <Checkbox checked={medication.indexOf(med.value) > -1} />
                        <ListItemText primary={med.value} />
                    </MenuItem>
                })}
            </Select>
        }
        return res;
    }

    // const displayAlertDropdown = () => {
    //     let res;
    //     if (alertData === []) {
    //         res = <Select className="bg-primary"><MenuItem>No Alert</MenuItem></Select>
    //     } else {
    //         const obj = [...new Map(alertList.map(item => [
    //             JSON.stringify(item), item
    //         ])).values()]
    //         res = <Select className="bg-primary" multiple displayEmptyvalue={alert}
    //             style={styleDropdown}
    //             onChange={handleMedicationChange} renderValue={(selected) => {
    //                 if (selected.length === 0) {
    //                     return <b>None</b>
    //                 } return selected.join(', ')
    //             }}
    //         >
    //             <MenuItem> <b>None</b> </MenuItem>
    //             {/* {
    //                 obj.map(alt)=>{
    //                     return <MenuItem key={}
    //                 }
    //             } */}
    //             </Select>

    //     }
    //             return res;
    // }

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
                modalHeader="Add New Patient"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>

                        <FormComponent
                            type="text" placeholder="Enter Patient ID" label="Patient ID :"
                            onChange={(e) => { setPatientId1(e.target.value); setFlagPatientID(1) }}
                        />
                    
                        <FormComponent
                            type="text" placeholder="Enter Patient's FirstName" label="First Name :"
                            onChange={(e) => { setFirstName(e.target.value); setFlagFirstName(1) }}
                        />
                      
                        <FormComponent
                            type="text" placeholder="Enter Patient's LastName" label="Last Name :"
                            onChange={(e) => { setLastName(e.target.value); setFlagLastname(1) }}
                        />

                        <FormGroup className="mb-4" row>
                            <Label sm={4}>Language :</Label>
                            <Col>
                                <Select className="bg-primary" value={language}
                                    style={styleDropdown}
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
                            <CustomInput type="radio" value="Black" name="race" label="Black" defaultChecked onChange={() => { setRace("Black"); setFlagRace(1) }} />
                            <CustomInput className="mx-5" type="radio" value="White" name="race" label="White" onChange={() => { setRace("White"); setFlagRace(1) }} />
                            <CustomInput type="radio" value="Other" name="race" label="Other" onChange={() => { setRace("Other"); setFlagRace(1) }} />
                        </FormGroup>

                        <FormComponent
                            type="text" placeholder="Enter Patient's Date of Birth" label="Date of Birth :"
                            onChange={(e) => { setDob(e.target.value); setFlagDOB(1) }}
                        />
                       
                        <FormComponent
                            type="text" placeholder="Enter Patient's Account Number" label="Account Number :"
                            onChange={(e) => { setAcNum(e.target.value); setFlagACNum(1) }}
                        />

                        <FormGroup className="mb-4" row>
                            <Label sm={3}> Sex :</Label>
                            <CustomInput type="radio" value="Male" name="gender" label="Male" defaultChecked onChange={() => { setSex("Male"); setFlagSex(1) }} />
                            <CustomInput className="mx-5" type="radio" value="Female" name="gender" label="Female" onChange={() => { setSex("Female"); setFlagSex(1) }} />
                            <CustomInput type="radio" value="Other" name="gender" label="Other" onChange={() => { setSex("Other"); setFlagSex(1) }} />
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

                        <FormGroup className="mb-4" row>
                            <Label sm={4}>Assign Alert :</Label>
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


