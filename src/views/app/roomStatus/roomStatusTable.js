/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Table from '../table';
import EditRoomStatus from './editRoomStatus';
import SnackbarModule from '../snackbar';

<Table />

const RoomStatusTable = () => {
    const [modal, setModal] = useState(false);
    const [roomid, setRoomid] = useState(null);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')
    const roomStatusData = useSelector(state => state.roomStatus.roomStatusData)

    const toggle = (id) => {
        setRoomid(id);
        setModal(!modal);
    }

    const handleSnackbarClose = () => {
        setOpen(false);
        window.location.reload();
    }


    const onRemoveClick = async (_id) => {
        await axios.delete(`${process.env.REACT_APP_API}room-status/${_id}`)
            .then(() => {
                setOpen(true)
                setMsg("Room status Removed Successfully!")
                setSeverity("success")
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity("error")
            })
    }

    const cols = React.useMemo(
        () => [
            {
                Header: 'Room ID',
                accessor: 'id',
                cellClass: 'text-muted w-10',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Room Title',
                accessor: 'title',
                cellClass: 'text-muted w-10',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Foreground Color',
                accessor: 'foreground',
                cellClass: 'text-muted w-15',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Background Color',
                accessor: 'background',
                cellClass: 'text-muted w-10',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Room Description',
                accessor: 'text',
                cellClass: 'text-muted w-10',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Edit | Remove',
                accessor: '_id',
                cellClass: 'text-muted w-10',
                Cell: (props) => <>
                    <button type="button"
                        style={{border: "none", borderRadius: '5px'}}
                        className="p-2 px-3 bg-primary" onClick={() => toggle(props.value)}>
                        <i className="simple-icon-pencil" style={{fontSize:'20px', verticalAlign:'text-top'}} />
                    </button>{' '}
                    <button type="button"
                        style={{border: "none", borderRadius: '5px'}}
                        className="p-2 px-3 bg-primary" onClick={() => onRemoveClick(props.value)}>
                        <i className="simple-icon-close" style={{fontSize:'20px', verticalAlign:'text-top'}}/>
                    </button>
                </>,
                sortType: 'basic',
            },
        ]
    )

    return (
        <div>
            <SnackbarModule
                open={open}
                message={msg}
                handleSnackbarClose={handleSnackbarClose}
                severity={severity}
            />
            <Table columns={cols} data={roomStatusData} />
            <EditRoomStatus
                isOpen={modal}
                toggle={toggle}
                roomid={roomid}
                roomStatusData={roomStatusData}
            />
        </div>
    )
}

export default RoomStatusTable
