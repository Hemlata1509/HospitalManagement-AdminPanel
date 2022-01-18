/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Table from '../table'
import SnackbarModule from '../snackbar';
import EditTheme from './editTheme';

<Table />

const ThemeTable = () => {
    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [themeid, setThemeId] = useState(null);
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')
    const themeData = useSelector(state => state.themeData.themeData)

    const toggle = (id) => {
        setThemeId(id);
        setModal(!modal);
    }

    const handleSnackbarClose = () => {
        setOpen(false);
        window.location.reload();
    }


    const onRemoveClick = async (_id) => {
        await axios.delete(`${process.env.REACT_APP_API}themes/${_id}`)
            .then(() => {
                setOpen(true)
                setMsg("Theme Removed Successfully!")
                setSeverity("success")
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity("error")
            })
    }

    const cols = React.useMemo(
        () =>
            [
                {
                    Header: 'Theme ID',
                    accessor: 'id',
                    cellClass: 'text-muted w-10',
                    Cell: (props) => <> {props.value} </>,
                    sortType: 'basic',
                },
                {
                    Header: 'Theme Name',
                    accessor: 'themeName',
                    cellClass: 'text-muted w-10',
                    Cell: (props) => <>
                        {props.value}
                    </>,
                    sortType: 'basic',
                },
                {
                    Header: 'Created At',
                    accessor: '',
                    cellClass: 'text-muted w-10',
                    Cell: (props) => <> {props.value} </>,
                    sortType: 'basic',
                },
                {
                    Header: 'Edit | Remove',
                    accessor: '_id',
                    cellClass: 'text-muted w-10',
                    Cell: (props) => <>
                        <button type="button"
                            style={{ border: "none", borderRadius: '5px' }}
                            className="p-2 px-3 bg-primary"
                            onClick={() => toggle(props.value)}
                        >
                            <i className="simple-icon-pencil" style={{ fontSize: '20px', verticalAlign: 'text-top' }} />
                        </button>{' '}
                        <button type="button"
                            style={{ border: "none", borderRadius: '5px' }}
                            className="p-2 px-3 bg-primary"
                            onClick={() => onRemoveClick(props.value)}
                        >
                            <i className="simple-icon-close" style={{ fontSize: '20px', verticalAlign: 'text-top' }} />
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
            <Table columns={cols} data={themeData} />
            <EditTheme
                isOpen={modal}
                toggle={toggle}
                themeid={themeid}
                themeData={themeData}
            />
        </div>
    )
}

export default ThemeTable