/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import EditAlert from './EditAlert';
import SnackbarModule from '../snackbar';
import Table from '../table';

<Table />

const AlertsTable = () => {
  const [modal, setModal] = useState(false);
  const [objectId, setObjectId] = useState(null);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('')
  const [severity, setSeverity] = useState('')

  const toggleModal = (id) => {
    setObjectId(id)
    setModal(!modal)
  }
  const deleteAlerts = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API}alerts/${id}`)
      .then(() => {
        setOpen(true)
        setMsg("Alert Removed Successfully!")
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

  const alertData = useSelector(state => state.alert.alertData)
  const cols = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'ledId',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Title',
        accessor: 'alertTitle',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Room Name',
        accessor: 'message',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Overlay',
        accessor: 'alertIsOverlay',
        cellClass: 'text-muted',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Background Color',
        accessor: 'alertBackgroundColor',
        cellClass: 'text-muted',
        Cell: (props) =>
          <>
            <i className="bi bi-square-fill"
              style={{
                color: `${props.value}`,
              }} />
            &nbsp;&nbsp;
            {props.value}
          </>,
        sortType: 'basic',
      },
      {
        Header: 'Foreground Color',
        accessor: 'alertForegroundColor',
        cellClass: 'text-muted',
        Cell: (props) =>
          <>
            <i className="bi bi-square-fill"
              style={{
                color: `${props.value}`,
              }} />
            &nbsp;&nbsp;
            {props.value}
          </>,
        sortType: 'basic',
      },
      {
        Header: 'Edit  |  Remove',
        accessor: '_id',
        cellClass: 'align-middle w-12',
        Cell: (props) => <>
          <button type="button" className="bg-primary p-2 px-3"
            style={{ borderRadius: '5px', border:'none' }}
            onClick={() => toggleModal(props.value)} >
            <i className="simple-icon-pencil" style={{fontSize:'20px', verticalAlign:'text-top'}} />
          </button>{' '}
          <button type="button" className="bg-primary p-2 px-3"
            style={{ borderRadius: '5px', border:'none' }}
            onClick={() => deleteAlerts(props.value)}>
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
      <EditAlert
        isOpen={modal}
        toggle={toggleModal}
        objectId={objectId}
        alertData={alertData}
      />
      <Table columns={cols} data={alertData} />
    </div>
  );
};

export default AlertsTable;
