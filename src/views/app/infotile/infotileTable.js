/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ModalBlock from './EditInfotile';
import Table from '../table';
import SnackbarModule from '../snackbar';

<Table />
const InfotileTable = () => {
  const [modal, setModal] = useState(false);
  const [infotileId, setInfotileId] = useState(null)
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState()
  const [severity, setSeverity] = useState()
  const infotileData = useSelector(state => state.infotiles.infotilesData)

  const toggle = (id) => {
    setInfotileId(id)
    setModal(!modal);
  }

  const deleteInfotile = async (_id) => {
    await axios.delete(`${process.env.REACT_APP_API}info-tiles/${_id}`)
      .then(() => {
        setOpen(true)
        setMsg("Infotile Deleted Successfully!")
        setSeverity("success")
      })
      .catch(() => {
        setOpen(true)
        setMsg("Oops!! Something went wrong!!")
        setSeverity("error")
      })
  }

  const handleSnackbarClose = () => {
    setOpen(false)
    window.location.reload();
  }

  const cols = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Text',
        accessor: 'text',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
        sortType: 'basic',
      },
      {
        Header: 'Backround',
        accessor: 'background',
        cellClass: 'text-muted w-10',
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
        Header: 'ForeGround',
        accessor: 'foreground',
        cellClass: 'text-muted w-10',
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
        cellClass: 'w-12',
        accessor: '_id',
        Cell: (props) => <>
          <button type="button"
            className="bg-primary p-2 px-3"
            style={{ border: "none", borderRadius: '5px' }}
            onClick={() => toggle(props.value)} >
            <i className="simple-icon-pencil" style={{fontSize:'20px', verticalAlign:'text-top'}} />
          </button>{' '}
          <button type="button"
            className="bg-primary p-2 px-3"
            style={{ border: "none", borderRadius: '5px' }}
            onClick={() => deleteInfotile(props.value)}>
            <i className="simple-icon-close" style={{fontSize:'20px', verticalAlign:'text-top'}}/>
          </button>
        </>,
        sortType: 'basic',
      },

      {
        Header: 'Show',
        accessor: row => [row.background, row.foreground, row.title],
        cellClass: 'w-10 ',
        Cell: (props) => <> <span
          className="border mt-5 pt-2 pb-2 px-2 "
          style={{
            background: props.value[0],
            color: props.value[1],
            fontSize: '25px',
            borderRadius: '10px '
          }}
        >
          {props.value[2]}
        </span>
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
        severity={severity}
        handleSnackbarClose={handleSnackbarClose}
      />
      <ModalBlock
        isOpen={modal}
        toggle={toggle}
        InfotileData={infotileData}
        infotileId={infotileId}
      />
      <Table columns={cols} data={infotileData} />
    </div>
  );
};

export default InfotileTable;

