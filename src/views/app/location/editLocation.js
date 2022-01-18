/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable object-shorthand */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */

import axios from 'axios';
import React, {
    useState,
    useEffect
} from 'react';
import { useSelector } from 'react-redux';
import { Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import { Col, Form, FormGroup, Label } from 'reactstrap';
import SnackbarModule from '../snackbar';
import { FormComponent, ModalComponent, styleDropdown } from '../formComponent';

const EditLocation = ({ isOpen, toggle, locationid, locationData }) => {

    const [flagLocation, setFlagLocation] = useState(0);
    const [flagBedNo, setFlagBedNo] = useState(0);
    const [flagRoomNo, setFlagRoomNo] = useState(0);
    const [flagFloorNo, setFlagFloorNo] = useState(0);
    const [flagCareteam, setFlagCareteam] = useState(0);
    const [flagPatient, setFlagPatient] = useState(0);

    const careteamData = useSelector(state => state.careteam.careteamData);
    const patientData = useSelector(state => state.patient.patientData);

    const [objectid, setObjectId] = useState('')
    const [locationId1, setLocationId1] = useState('');
    const [bedno, setBedno] = useState('');
    const [roomNo, setRoomNo] = useState('');
    const [floorNo, setFloorNo] = useState('');
    const [assginedPatient, setAssginedPatient] = useState('');
    const [assginedCareteam, setAssginedCareteam] = useState([]);
    const [patientId, setPatientId] = useState("");
    const [careteamId, setCareteamId] = useState([]);

    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('');

    const careteamList = []
    const patientList = []

    patientData.map(pt => {
        return patientList.push({ key: pt._id, value: `${pt.patientFirstName} ${pt.patientLastName}` })
    })
// console.log(patientList);
    careteamData.map((care) => {
        return careteamList.push({ key: care._id, value: `${care.employeeFirstName} ${care.employeeLastName} (${care.employeeRole})` });
    })

    useEffect(() => {
        locationData.map((location) => {
            if (location._id === locationid) {
                setLocationId1(location.locationId);
                setBedno(location.bedNumber);
                setRoomNo(location.roomNumber);
                setFloorNo(location.floorNumber);
                setAssginedPatient(location.patient ? `${location.patient.patientFirstName} ${location.patient.patientLastName}` : '');
                setAssginedCareteam(location.careTeam ? location.careTeam.map((dr) => `${dr.employeeFirstName} ${dr.employeeLastName} (${dr.employeeRole})`) : []);
                setCareteamId(location.careTeam === null ? [] : location.careTeam.map(id => id._id))
                setPatientId(location.patient ? location.patient : '')
                setObjectId(location._id)
            }
            return location;
        })
    }, [locationid, locationData])

    useEffect(() => {
        let res = [];
        careteamList.map((infot) => {
            return assginedCareteam.map((dat) => {
                if (dat === infot.value) {
                    res = [...res, infot.key]
                }
                return res
            })
        })
        setCareteamId(res)
    }, [assginedCareteam])

    const handleCareteamChange = (e) => {
        setFlagCareteam(1)
        const { target: { value } } = e;
        setAssginedCareteam(typeof value === 'string' ? value.split(',') : value,)
    }

    const save = async () => {
        const dataLocation = {}

        if (flagLocation === 1) {
            dataLocation.locationId = locationId1;
        }
        if (flagBedNo === 1) {
            dataLocation.bedNumber = bedno;
        }
        if (flagRoomNo === 1) {
            dataLocation.roomNumber = roomNo;
        }
        if (flagFloorNo === 1) {
            dataLocation.floorNumber = floorNo;
        }
        if (flagCareteam === 1) {
            dataLocation.careTeam = careteamId;
        }
        if (flagPatient === 1) {
            if (patientId === '' || patientId === undefined|| patientId === null ) {
                console.log("if");
                dataLocation.patient = null;
            }
            else {
                console.log("else");
                dataLocation.patient = patientId;
                // dataLocation.patient = null;
            }
        }

        await axios(`${process.env.REACT_APP_API}locations/${objectid}`, {
            method: 'PUT',
            data: dataLocation,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Location Edited Successfully!")
                setSeverity("success")
            })
            .catch(() => {
                console.log("dataLocation----", dataLocation);
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity("error")
            })
             console.log("dataLocation--save-------", dataLocation);
        toggle(!isOpen)
    }
    const handleSnackbarClose = () => {
        setOpen(false);
        window.location.reload();
    }

    const cancel = () => {
        toggle(!isOpen)
    }

    const displayLocationDropDown = () => {
        let res;
        if (locationData === []) {
            res = <Select className="bg-primary">
                <MenuItem>
                    No Location
                </MenuItem>
            </Select>
        } else {
            const obj = [...new Map(patientList.map(item => [
                JSON.stringify(item),
                item])).values()];
            res = <Select className="bg-primary" value={assginedPatient} displayEmpty
                style={styleDropdown}
                onChange={(e) => { setAssginedPatient(e.target.value); setFlagPatient(1) }}
                renderValue={selected => {
                    if (selected.length === 0) { return <b>None</b> }
                    console.log(selected);
                    return selected
                }}
            >
                <MenuItem value="None" onClick={() => setPatientId(null)} ><b>None</b></MenuItem>
                {obj.map((loc) =>
                    <MenuItem key={loc.key} id={loc.key} value={loc.value} onClick={(e) => {setPatientId(e.target.id); console.log(e.target.id);}}>
                        {loc.value}
                    </MenuItem>
                )}
            </Select>
        }
        return res
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
                modalHeader="Edit Location Information"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>
                         <FormComponent  value={locationId1}
                            type="text" label="Location ID :" placeholder="Enter Location ID "
                            onChange={(e) => { setFlagLocation(1); setLocationId1(e.target.value) }}
                        />

                        <FormComponent value={bedno}
                            type="text" label="Bed Number :" placeholder="Enter Bed Number "
                            onChange={(e) => { setFlagBedNo(1); setBedno(e.target.value) }}
                        />

                        <FormComponent value={roomNo}
                            type="text" label="Room Number :" placeholder="Enter Room Number "
                            onChange={(e) => { setFlagRoomNo(1); setRoomNo(e.target.value) }}
                        />

                        <FormComponent value={floorNo}
                            type="text" label="Floor Number :" placeholder="Enter Floor Number "
                            onChange={(e) => { setFlagFloorNo(1); setFloorNo(e.target.value) }}
                        />

                        <FormGroup className="mb-5" row>
                            <Label sm={4}>Assigned Patient :</Label>
                            <Col>
                                {displayLocationDropDown()}
                            </Col>
                        </FormGroup>

                        {/* <FormGroup className="mb-5" row>
                            <Label sm={4}>Assigned Patient :</Label>
                            <Col >
                                {displayLocationDropDown()}
                            </Col>
                        </FormGroup> */}
                        <FormGroup className="mb-5" row>
                            <Label sm={4}>Assigned Careteam :</Label>
                            <Col>
                                <Select multiple displayEmpty className="bg-primary"
                                    value={assginedCareteam}
                                    style={styleDropdown}
                                    onChange={(e) => { handleCareteamChange(e) }}
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
                                    {careteamList.map((ct) => {
                                        return <MenuItem
                                            key={ct.key}
                                            id={ct.key}
                                            value={ct.value}
                                            style={{ borderRadius: '15px', fontSize: '18px', }}>
                                            <Checkbox checked={assginedCareteam.indexOf(ct.value) > -1} />
                                            <ListItemText primary={ct.value} />
                                        </MenuItem>
                                    })}
                                </Select>
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

export default EditLocation;