/* eslint-disable react-hooks/exhaustive-deps */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect } from 'react';
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

const EditDevice = ({ isOpen, toggle, deviceid, DeviceData }) => {
    const [objectId, setObjectId] = useState('');
    const [id, setId] = useState('');
    const [devicename, setDeviceName] = useState('');
    const [deviceip, setDeviceIp] = useState('')
    const [devicetype, setdeviceType] = useState();
    const [location, setLocation] = useState('')
    const [locationKey, setLocationKey] = useState('')
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState('')
    const [themeID, setThemeID] = useState('')
    const [msg, setMsg] = useState()
    const [severity, setSeverity] = useState()

    const [flagDeviceID, setFlagID] = useState(0)
    const [flagDeviceName, setFlagDeviceName] = useState(0)
    const [flagDeviceType, setFlagDeviceType] = useState(0)
    const [flagDeviceIP, setFlagDeviceIP] = useState(0)
    const [flagLocation, setFlagLoaction] = useState(0)
    const [flagTheme, setFlagTheme] = useState(0)

    const locationData = useSelector(state => state.location.locationData)
    const themeData = useSelector(state => state.themeData.themeData)

    useEffect(() => {
        DeviceData.map(device => {
            if (device._id === deviceid) {
                setId(device.deviceId);
                setDeviceName(device.deviceName);
                setDeviceIp(device.deviceIp);
                setdeviceType(device.deviceType)
                setObjectId(device._id)
                setLocationKey(device.locationId ? device.locationId._id : '')
                setThemeID(device.themeLayout ? device.themeLayout._id : '')
                setLocation(device.locationId ? `BedNo.-${device.locationId.bedNumber} RoomNo. ${device.locationId.roomNumber} FloorNo.${device.locationId.floorNumber}` : '')
                setTheme(device.themeLayout ? device.themeLayout.themeName : '')
            }
            return device;
        })
    }, [DeviceData, deviceid])

    useEffect(() => {
        themeData.map((th) => {
            const thID = th._id;
            const { themeName } = th;
            themeList.push({
                key: thID, value: themeName
            })
            return themeList;
        })
        let res;
        themeData.map((them) => {
            if (them.themeName === theme) {
                res = them._id
            }
            return res
        })
        setThemeID(res)
    }, [theme])

    useEffect(() => {
        locationData.map((locationFilter) => {
            const locationId = locationFilter._id
            const bedNo = locationFilter.bedNumber;
            const floorNo = locationFilter.floorNumber;
            const roomNo = locationFilter.roomNumber;
            locationList.push({
                key: locationId, value: `BedNo.-${bedNo} RoomNo. ${roomNo} FloorNo.${floorNo}`,
            })
            return locationList
        })
        let res;
        locationData.map((loc) => {
            const rm = `BedNo.-${loc.bedNumber} RoomNo. ${loc.roomNumber} FloorNo.${loc.floorNumber}`
            if (rm === location) {
                res = loc._id
            }
            return res
        })
        setLocationKey(res)
    }, [location])


    const displayThemeDropDown = () => {
        let res;
        if (themeData === []) {
            res = <Select className="bg-primary">
                <MenuItem>
                    None
                </MenuItem>
            </Select>
        } else {
            const obj = [...new Map(themeList.map(item => [
                JSON.stringify(item), item
            ])).values()]
            res = <Select className="bg-primary" value={theme} displayEmpty
                style={styleDropdown}
                onChange={(e) => { setTheme(e.target.value); setFlagTheme(1) }}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <b>None</b>
                    }
                    return selected;
                }}
            >
                <MenuItem value="None"><b>None</b></MenuItem>
                {obj.map(data => {
                    return <MenuItem value={data.value} key={data.key}
                    >
                        {data.value}
                    </MenuItem>
                })}
            </Select>
        }
        return res;
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
            const obj = [...new Map(locationList.map(item => [
                JSON.stringify(item),
                item])).values()];
            res = <Select className="bg-primary" value={location} displayEmpty
                style={styleDropdown}
                onChange={(e) => { setLocation(e.target.value); setFlagLoaction(1) }}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <b>None</b>
                    }
                    return selected;
                }}
            >
                <MenuItem value=""><b>None</b></MenuItem>
                {obj.map((loc) =>
                    <MenuItem key={loc.key} id={loc.key} value={loc.value} onClick={(e) => setLocationKey(e.target.id)}>
                        {loc.value}
                    </MenuItem>
                )}
            </Select>
        }
        return res
    }

    const save = async () => {
        const dataDevice = {}
        if (flagDeviceID === 1) {
            dataDevice.deviceId = id
        }
        if (flagDeviceName === 1) {
            dataDevice.deviceName = devicename
        }
        if (flagDeviceType === 1) {
            dataDevice.deviceType = devicetype
        }
        if (flagDeviceIP === 1) {
            dataDevice.deviceIp = deviceip
        }
        if (flagLocation === 1) {
            if (locationKey === '' || locationKey === undefined) {
                dataDevice.locationId = null
            } else {
                dataDevice.locationId = locationKey
            }
        }
        if (flagTheme === 1) {
            if (themeID === '' || themeID === undefined) {
                dataDevice.themeLayout = null
            } else {
                dataDevice.themeLayout = themeID
            }
        }
        await axios(`${process.env.REACT_APP_API}devices/${objectId}`, {
            method: 'PUT',
            data: dataDevice,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Device Edited Successfully!!")
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

    const handleSnackbarClose = () => {
        setOpen(false)
        // window.location.reload();
    }

    const cancel = () => {
        toggle(!isOpen)
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
                modalHeader="Edit Device Information"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>

                        <FormComponent
                            type="text" value={id} placeholder="Enter Device Id" label="Device ID :"
                            onChange={(e) => { setId(e.target.value); setFlagID(1) }}
                        />

                        <FormComponent
                            type="text" value={devicename} placeholder="Enter Device Id" label="Device Name :"
                            onChange={(e) => { setDeviceName(e.target.value); setFlagDeviceName(1) }}
                        />

                        <FormComponent
                            type="text" value={deviceip} placeholder="Enter Device IP" label="Device IP :"
                            onChange={(e) => { setDeviceIp(e.target.value); setFlagDeviceIP(1) }}
                        />

                        <FormGroup className="mb-5" row>
                            <Label sm={4}>Device Type :</Label>
                            <Col>
                                <Select
                                    className="bg-primary"
                                    value={devicetype}
                                    style={styleDropdown}
                                    onChange={(e) => { setdeviceType(e.target.value); setFlagDeviceType(1) }}
                                >
                                    {deviceList.map((device) =>
                                        <MenuItem key={device.key} value={device.value}
                                            style={{ borderRadius: '15px', fontSize: '18px' }}>
                                            {device.value}
                                        </MenuItem>
                                    )
                                    }
                                </Select>
                            </Col>
                        </FormGroup>

                        <FormGroup className="mb-5" row>
                            <Label sm={4}>Assigned Location :</Label>
                            <Col>
                                {displayLocationDropDown()}
                                {/* </Select> */}
                            </Col>
                        </FormGroup>

                        <FormGroup className="mb-5" row>
                            <Label sm={4}>Assigned Theme:</Label>
                            <Col>
                                {displayThemeDropDown()}
                                {/* </Select> */}
                            </Col>
                        </FormGroup>

                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />
        </div>
    );
}

export default EditDevice;