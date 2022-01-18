/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SnackbarModule from '../snackbar';
import Table from '../table';
import EditMedication from './EditMedication';

<Table />

const InfotileTable = () => {
    const [modal, setModal] = useState(false);
    const [objectId,setObjectId]= useState(null);
    const medicationData = useSelector(state => state.medication.medicationData)
    const [open, setOpen] = useState()
    const [msg, setMsg] = useState()
    const [severity, setSeverity] = useState()
    console.log(medicationData);

    const toggleModal = (id) => {
        setObjectId(id);
        setModal(!modal)
    };

    const deleteMedicaton = async (_id) => {
        await axios.delete(`${process.env.REACT_APP_API}medications/${_id}`)
        .then(() => {
            setOpen(true)
            setMsg("Medication Deleted Successfully!")
            setSeverity("success")
        })
        .catch(() => {
            setOpen(true)
            setMsg("Oops!! Something went wrong!!")
            setSeverity("error")
        })
    }

    const handleSnackbarClose = () => {
        setOpen(false);
        window.location.reload();
    }

    const cols = React.useMemo(
        () => [
            // {
            //     Header: 'Id ',
            //     accessor: 'id',
            //     cellClass: 'text-muted w-10',
            //     Cell: (props) => <>{props.value}</>,
            //     sortType: 'basic',
            // },
            {
                Header: 'Medicine Name',
                accessor: 'name',
                cellClass: 'text-muted w-12',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Notes',
                accessor: 'notes',
                cellClass: 'text-muted w-15',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Expiry Date ',
                accessor: 'ingredientsInactive',
                cellClass: 'text-muted w-10',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Precautions',
                accessor: 'precautions',
                cellClass: 'text-muted w-12',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },
            {
                Header: 'Ingredients',
                accessor: 'ingredients',
                cellClass: 'text-muted w-12',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },  
            {
                Header: 'Medicine Image',
                accessor: 'imageUrl',
                cellClass: 'text-muted w-12',
                Cell: (props) => <>{props.value}</>,
                sortType: 'basic',
            },   
            {
                Header: 'Edit  |  Remove',
                accessor: '_id',
                cellClass: 'align-middle w-12',
                Cell: (props) => <>
                    <button type="button" className="bg-primary p-2 px-3"
                        style={{ borderRadius: '5px',border:'none'}}
                        onClick={() => toggleModal(props.value)} >
                        <i className="simple-icon-pencil" style={{fontSize:'20px', verticalAlign:'text-top'}} />
                    </button>{' '}
                    <button type="button" className="bg-primary p-2 px-3"
                        style={{ borderRadius: '5px',border:'none'}}
                        onClick={() => deleteMedicaton(props.value)}>
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
            <EditMedication
                isOpen={modal}
                toggle={toggleModal}
                medicationData={medicationData}
                objectId={objectId}
            />
            <Table columns={cols} data={medicationData} />
        </div>
    );
};

export default InfotileTable;

