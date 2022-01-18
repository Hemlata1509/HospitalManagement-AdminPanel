/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SnackbarModule from '../snackbar';
import ModalBlock from './EditCareteam';
import Table from '../table';

<Table />
const CareteamTable = () => {
    const [modal, setModal] = useState(false);
    const [careteamid, setCareteamId] = useState(null)
    const CareteamData = useSelector(state => state.careteam.careteamData);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')

    const handleSnackbarClose = () => {
        setOpen(false);
        window.location.reload();
    }

    const toggle = (id1) => {
        setCareteamId(id1)
        setModal(!modal)
    };

    const deleteCareteam = async (_id) => {
        await axios.delete(`${process.env.REACT_APP_API}care-teams/${_id}`)
            .then(() => {
                setOpen(true)
                setMsg("Careteam Removed Successfully!")
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
                Header: 'Profile',
                accessor: 'employeeImageUrl',
                cellClass: 'text-muted w-10',
                Cell: (props) => <img
                    src={props.value}
                    alt="thumbnail"
                    className="img-thumbnail border-0 rounded-circle list-thumbnail"
                />
            },
            {
                Header: 'Id ',
                accessor: 'employeeId',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Role ',
                accessor: 'employeeRole',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Title',
                accessor: 'employeeTitle',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'FirstName ',
                accessor: 'employeeFirstName',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'LastName',
                accessor: 'employeeLastName',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Suffix',
                accessor: 'employeeSuffix',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'PhoneNumber',
                accessor: 'employeePhoneNumber',
                cellClass: 'text-muted w-10 align-middle',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Edit | Remove',
                cellClass: 'align-middle w-12',
                accessor: '_id',
                Cell: (props) => <>
                    <button type="button" className="bg-primary p-2 px-3" 
                        style={{ borderRadius: '5px', border:'none' }}
                        onClick={() => toggle(props.value)}>
                        <i className="simple-icon-pencil" style={{fontSize:'20px', verticalAlign:'text-top'}} />
                    </button>{' '}
                    <button type="button" className="bg-primary p-2 px-3"
                        style={{ borderRadius: '5px', border:'none' }}
                        onClick={() => deleteCareteam(props.value)}>
                        <i className="simple-icon-close" style={{fontSize:'20px', verticalAlign:'text-top'}}/>
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
                message={msg}
                handleSnackbarClose={handleSnackbarClose}
                severity={severity}
            />
            <ModalBlock
                isOpen={modal}
                toggle={toggle}
                careteamid={careteamid}
                CareteamData={CareteamData}
            />

            <Table columns={cols} data={CareteamData} />
        </div>
    );
};

export default CareteamTable;
