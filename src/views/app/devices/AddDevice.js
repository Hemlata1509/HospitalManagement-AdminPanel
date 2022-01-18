/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */

import React, { useEffect, useState } from 'react';
import { Col, Form, FormGroup, Label } from 'reactstrap';
import { Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SnackbarModule from '../snackbar';
import { FormComponent, ModalComponent, styleDropdown } from '../formComponent';

const deviceList = [
    { key: '1', value: 'Android' },
    { key: '2', value: 'IOS' },
    { key: '3', value: 'Web OS' }
]
const locationList = []
const themeList = []

const AddDevice = ({ isOpen, toggle }) => {
    const themeData = useSelector(state => state.themeData.themeData)
    const [deviceid, setDeviceId] = useState('');
    const [devicename, setDeviceName] = useState('');
    const [deviceip, setDeviceIp] = useState('')
    const [devicetype, setdeviceType] = useState("Android")
    const [location, setLocation] = useState([])
    const [locationKey, setLocationKey] = useState('')
    const [theme, setTheme] = useState([])
    const [themeID, setThemeID] = useState('')
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState()
    const [severity, setSeverity] = useState()

    const [flagDeviceID, setFlagID] = useState(0)
    const [flagDeviceName, setFlagDeviceName] = useState(0)
    const [flagDeviceType, setFlagDeviceType] = useState(0)
    const [flagDeviceIP, setFlagDeviceIP] = useState(0)
    const [flagLoaction, setFlagLoaction] = useState(0)
    const [flagTheme, setFlagTheme] = useState(0)

    const locationData = useSelector(state => state.location.locationData)

    useEffect(() => {
        locationData.map((locationFilter) => {
            const id = locationFilter._id
            const bedNo = locationFilter.bedNumber;
            const floorNo = locationFilter.floorNumber;
            const roomNo = locationFilter.roomNumber;
            locationList.push({
                key: id, value: `BedNo.-${bedNo} RoomNo. ${roomNo} FloorNo.${floorNo}`
            })
            return locationList
        })
        themeData.map((th) => {
            // console.log(th);
            const id = th._id;
            const { themeName } = th;
            themeList.push({
                key: id, value: themeName
            })
            return themeList;
        })
    })

    const displayThemeDropDown = () => {
        let res;
        if (themeData === []) {
            res = <Select className="bg-primary">
                <MenuItem>
                    No Theme
                </MenuItem>
            </Select>
        } else {
            const obj = [...new Map(themeList.map(item => [
                JSON.stringify(item), item
            ])).values()]
            res = <Select className="bg-primary" value={theme} displayEmpty
                style={styleDropdown} onChange={(e) => { setTheme(e.target.value); setFlagTheme(1) }}
                renderValue={selected => {
                    if (selected.length === 0) { return <b>None</b> }
                    return selected
                }}
            >
                <MenuItem value=""><b>None</b></MenuItem>
                {obj.map(data => {
                    return <MenuItem id={data.key} value={data.value} key={data.key} onClick={(e) => setThemeID(e.target.id)}>
                        {data.value}
                    </MenuItem>
                })}
            </Select>
        }
        return res;
    }

    const save = async () => {
        const dataDevice = {};
        if (flagDeviceID === 1) {
            dataDevice.deviceId = deviceid
        }
        if (flagDeviceName === 1) {
            dataDevice.deviceName = devicename
        }
        if (flagDeviceType === 1 || flagDeviceType === 0) {
            dataDevice.deviceType = devicetype
        }
        if (flagDeviceIP === 1) {
            dataDevice.deviceIp = deviceip
        }
        if (flagLoaction === 1) {
            dataDevice.locationId = locationKey
        }
        if (flagTheme === 1) {
            dataDevice.themeLayout = themeID
        }
        await axios(`${process.env.REACT_APP_API}devices/`, {
            method: 'POST',
            data: dataDevice,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Device Added Successfully!!")
                setSeverity('success')
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity('error')
            })
        toggle(!isOpen)
        console.log(dataDevice);
    }

    const cancel = () => {
        toggle(!isOpen)
    }
    const handleSnackbarClose = () => {
        setOpen(false);
        window.location.reload();
    }

    const handleLocationChange = () => {
        let res;
        if (locationData === []) {
            res = <Select className="bg-primary">
                <MenuItem value="NoLocation">
                    No Theme
                </MenuItem>
            </Select>
        } else {
            const obj = [...new Map(locationList.map(item => [
                JSON.stringify(item),
                item])).values()];
            res = <Select className="bg-primary" value={location} displayEmpty style={styleDropdown}
                onChange={(e) => { setLocation(e.target.value); setFlagLoaction(1) }}
                renderValue={selected => {
                    if (selected.length === 0) { return <b>None</b> }
                    return selected
                }}
            >
                <MenuItem value="">
                    <b>None</b>
                </MenuItem>
                {obj.map((loc) =>
                    <MenuItem key={loc.key} id={loc.key} value={loc.value}
                        onClick={(e) => { console.log(loc.key); setLocationKey(e.target.id) }}>
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
                severity={severity}
                message={msg}
                handleSnackbarClose={handleSnackbarClose}
            />

            <ModalComponent
                isOpen={isOpen}
                toggle={toggle}
                modalHeader="Add New Device"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>

                        <FormComponent
                            label="Device ID :" type="text" placeholder="Enter Device Id"
                            onChange={(e) => { setDeviceId(e.target.value); setFlagID(1) }}
                        />

                        <FormComponent
                            label="Device Name :" type="text" placeholder="Enter Device Name"
                            onChange={(e) => { setDeviceName(e.target.value); setFlagDeviceName(1) }}
                        />

                        <FormComponent
                            label="Device IP :" type="text" placeholder="Enter Device IP"
                            onChange={(e) => { setDeviceIp(e.target.value); setFlagDeviceIP(1) }}
                        />

                        <FormGroup className="mb-5" row>
                            <Label sm={4}>Device Type :</Label>
                            <Col>
                                <Select className="bg-primary" value={devicetype} displayEmpty style={styleDropdown}
                                    onChange={(e) => { setdeviceType(e.target.value); setFlagDeviceType(1) }}
                                >
                                    {deviceList.map((device) =>
                                        <MenuItem key={device.key} value={device.value}
                                            style={{ borderRadius: '15px', fontSize: '18px', }}>
                                            {device.value}
                                        </MenuItem>
                                    )}
                                </Select>
                            </Col>
                        </FormGroup>

                        <FormGroup className="mb-5" row>
                            <Label sm={4}>Assigned Location :</Label>
                            <Col>  {handleLocationChange()} </Col>
                        </FormGroup>

                        <FormGroup className="mb-5" row>
                            <Label sm={4}>Assigned Theme:</Label>
                            <Col>  {displayThemeDropDown()} </Col>
                        </FormGroup>

                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />

        </div>
    );
}

export default AddDevice;
