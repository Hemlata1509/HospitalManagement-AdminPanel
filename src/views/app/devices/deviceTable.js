/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-sequences */
/* eslint-disable no-dupe-keys */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SnackbarModule from '../snackbar';
import EditDevice from './EditDevice';
import Table from '../table';

<Table />

const CareteamTable = () => {
    const [modal, setModal] = useState(false);
    const [deviceId, setCareteamId] = useState(null)
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState()
    const [severity, setSeverity] = useState()
    const DeviceData = useSelector(state => state.devices.deviceData)
    // console.log(DeviceData);

    const toggle = (id) => {
        setCareteamId(id);
        setModal(!modal);
    }

    const deleteDevice = async (_id) => {
        await axios.delete(`${process.env.REACT_APP_API}devices/${_id}`)
            .then(() => {
                setOpen(true)
                setMsg("Device Removed Successfully!!")
                setSeverity('success')
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity('error')
            })
    }

    const handleSnackbarClose = () => {
        setOpen(false)
        window.location.reload();
    }

    const cols = React.useMemo(
        () => [
            {
                Header: 'Device Id',
                accessor: 'deviceId',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Device Name',
                accessor: 'deviceName',
                cellClass: 'text-muted w-12 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Device Type',
                accessor: 'deviceType',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Device Ip ',
                accessor: 'deviceIp',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Assigned Location',
                accessor: "locationId",
                cellClass: 'text-muted w-15 align-middle',
                Cell: (props) => <>
                    {`${props.value ? `BedNo.- ${props.value.bedNumber} RoomNo. ${props.value.roomNumber} Floor.${props.value.floorNumber}` : 'None'}`}
                </>,
                sortType: 'basic',
            },
            {
                Header: 'Assigned Theme',
                accessor: 'themeLayout.themeName',
                cellClass: 'text-muted w-12 align-middle',
                Cell: (props) => <>
                {props.value === undefined ?  'None': props.value}
                    {/* {Object.keys(props.value)} */}
                </>,
                sortType: 'basic',
            },
            {
                Header: 'Edit  |  Remove',
                cellClass: 'align-middle w-12',
                accessor: '_id',
                Cell: (props) => <>
                    <button type="button"
                        className="bg-primary p-2 px-3"
                        style={{ borderRadius: '5px', border: 'none' }}
                        onClick={() => toggle(props.value)} >
                        <i className="simple-icon-pencil" style={{ fontSize: '20px', verticalAlign: 'text-top' }} />
                    </button>{' '}
                    <button type="button"
                        className="bg-primary p-2 px-3"
                        style={{ borderRadius: '5px', border: 'none' }}
                        onClick={() => deleteDevice(props.value)}>
                        <i className="simple-icon-close" style={{ fontSize: '20px', verticalAlign: 'text-top' }} />
                    </button>
                </>,
                sortType: 'basic',
            },
        ],
        []);

    return (
        <div>
            <SnackbarModule
                open={open}
                severity={severity}
                message={msg}
                handleSnackbarClose={handleSnackbarClose}
            />
            <EditDevice
                isOpen={modal}
                toggle={toggle}
                deviceid={deviceId}
                DeviceData={DeviceData}
            />
            <Table columns={cols} data={DeviceData} />
        </div>
    );
};

export default CareteamTable;

