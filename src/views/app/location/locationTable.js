/* eslint-disable no-underscore-dangle */
/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import EditLocation from './editLocation'
import Table from '../table';
import SnackbarModule from '../snackbar';
// import Careteam from '../careteam';

<Table />

const LocationTable = () => {

  const [modal, setModal] = useState(false);
  const [locationid, setLocationid] = useState('');
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('')
  const [severity, setSeverity] = useState('')
  const locationData = useSelector(state => state.location.locationData)

  const toggle = (id) => {
    setLocationid(id)
    setModal(!modal)
  }

  const handleSnackbarClose = () => {
    setOpen(false);
    window.location.reload();
  }

  const removeLocation = async (_id) => {
    await axios.delete(`${process.env.REACT_APP_API}locations/${_id}`)
      .then(() => {
        setOpen(true)
        setMsg("Location Removed Successfully!")
        setSeverity("success")
      })
      .catch(() => {
        setOpen(true)
        setMsg("Oops!! Something went wrong!!")
        setSeverity("error")
      })
  }

  const displayCareteam = (data) => {
    return data.map(value => <div key={value._id}>{`${value.employeeFirstName} ${value.employeeLastName}`}</div>)

  }

  const cols = React.useMemo(
    () => [
      {
        Header: 'Location ID',
        accessor: 'locationId',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value?props.value:'None'}</>,
        sortType: 'basic',
      },
      {
        Header: 'Bed No',
        accessor: 'bedNumber',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value?props.value:'None'}</>,
        sortType: 'basic',
      },
      {
        Header: 'Room No',
        accessor: 'roomNumber',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value?props.value:'None'}</>,
        sortType: 'basic',
      },
      {
        Header: 'Floor No',
        accessor: 'floorNumber',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value ?  props.value  : 'None'}</>,
        sortType: 'basic',
      },
      {
        Header: 'Assigned Patient',
        accessor: 'patient',
        cellClass: 'text-muted',
        Cell: (props) => <>
          {props.value ? `${props.value.patientFirstName}  ${props.value.patientLastName}` : 'None'}
        </>,
        sortType: 'basic',
      },
      {
        Header: 'Assigned Careteam',
        accessor: 'careTeam',
        cellClass: 'text-muted',
        Cell: (props) => <>
          {/* {console.log(props.value)} */}
          {/* {props.value===null?} */}
          {props.value===null || props.value.length <= 0 ? 'None' : displayCareteam(props.value)}
        </>,
        sortType: 'basic',
      },
      {
        Header: 'Actions',
        accessor: '_id',
        cellClass: '',
        Cell: (props) => <div style={{ display: "flex", }}>
          <button
            type="button"
            style={{ marginRight: '0.3rem', border: "none", borderRadius: '5px' }}
            className="p-2 px-3 bg-primary"
            onClick={() => toggle(props.value)}
          >
            <i className="simple-icon-pencil" style={{ fontSize: '20px', verticalAlign: 'text-top' }} />
          </button>{' '}
          <button type="button" style={{ border: "none", borderRadius: '5px' }}
            className="p-2 px-3 bg-primary" onClick={() => removeLocation(props.value)}
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
      <Table columns={cols} data={locationData} />
      <EditLocation
        isOpen={modal}
        toggle={toggle}
        locationid={locationid}
        locationData={locationData}
      />

    </div>
  );
};

export default LocationTable;
