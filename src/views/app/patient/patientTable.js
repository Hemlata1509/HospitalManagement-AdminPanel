/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-underscore-dangle */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SnackbarModule from '../snackbar';
import EditPatient from './editPatient';
import Table from '../table';

<Table />

const PatientTable = () => {
  const [modal, setModal] = useState(false);
  const [patientid, setPatientid] = useState(null)
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('')
  const [severity, setSeverity] = useState('')
  const patientData = useSelector(state => state.patient.patientData);
  // console.log(patientData);

  const toggle = (id) => {
    setPatientid(id);
    setModal(!modal)
  };

  const onDeleteClick = async (_id) => {
    await axios.delete(`${process.env.REACT_APP_API}patients/${_id}`)
      .then(() => {
        setOpen(true)
        setMsg("Patient Removed Successfully!")
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
  const displayInfotiles = (data) => {
    return data.map(infotiles =>
      <div key={infotiles._id} className="border p-1 col-5" style={{ margin:'1px',
        background: infotiles.background, color: infotiles.foreground, 
        fontSize: '25px', borderRadius: '10px ', textAlign: 'center'
      }}>
        {infotiles.title}
      </div>)
  }

  const displayMedication = (data) => {
    return data.map(medication =>
      <div key={medication._id}>
        {medication.medicationId.name}
      </div>
    )
  }

  const cols = React.useMemo(
    () => [
      {
        Header: 'Patient ID',
        accessor: 'patientId',
        cellClass: 'text-muted ',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'First Name',
        accessor: 'patientFirstName',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Last Name',
        accessor: 'patientLastName',
        cellClass: 'text-muted ',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Primary Language',
        accessor: 'patientPrimaryLanguage',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Race',
        accessor: 'patientRace',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'DOB',
        accessor: 'patientDateOfBirth',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Account Number',
        accessor: 'patientAccountNum',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Sex',
        accessor: 'patientSex',
        cellClass: 'text-muted ',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Medication',
        accessor: 'medication',
        cellClass: 'text-muted ',
        Cell: (props) => <>
          {props.value.length <= 0 ? 'None' : displayMedication(props.value)}
        </>,
        sortType: 'basic',
      },
      {
        Header: 'Patient Schedule',
        accessor: '',
        cellClass: 'text-muted ',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Alerts',
        accessor: '',
        cellClass: 'text-muted ',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Infotiles',
        accessor: 'infoTiles',
        cellClass: 'text-muted w-10',
        Cell: (props) => <div className="row">
          {props.value.length <= 0 ? 'None' : displayInfotiles(props.value)}
        </div>,
        sortType: 'basic',
      },
      {
        Header: 'Actions',
        cellClass: 'align-middle',
        accessor: '_id',
        Cell: (props) => <div style={{ display: "flex" }}>
          <button type="button" style={{ marginRight: '0.3rem', border: "none", borderRadius: '5px' }}
            className="p-2 px-3 bg-primary" onClick={() => toggle(props.value)}
          >
            <i className="simple-icon-pencil" style={{ fontSize: '20px', verticalAlign: 'text-top' }} />
          </button>
          <button type="button" style={{ border: "none", borderRadius: '5px' }}
            className="p-2 px-3 bg-primary" onClick={() => onDeleteClick(props.value)}
          >
            <i className="simple-icon-close" style={{ fontSize: '20px', verticalAlign: 'text-top' }} />
          </button>
        </div>,
        sortType: 'basic',
      },
    ],
    []
  );

  return (
    <div>
      <SnackbarModule
        open={open}
        message={msg}
        handleSnackbarClose={handleSnackbarClose}
        severity={severity}
      />
      <Table columns={cols} data={patientData} />
      <EditPatient
        isOpen={modal}
        toggle={toggle}
        patientid={patientid}
        patientData={patientData}
      />
    </div>
  );
};

export default PatientTable;