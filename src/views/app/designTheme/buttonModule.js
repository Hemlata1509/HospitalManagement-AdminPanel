/* eslint-disable react/jsx-boolean-value */
import React from 'react'
import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { Button } from 'reactstrap';

const ButtonModule = ({
    dropdownmodule, saveLayOut, clearModule,enablePenZoom,dragmodule,drag,
    addModule, loadDefault, click,pen,
    defaultValue
}) => {

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" onClick={enablePenZoom} disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#184f90',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    const DragSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" onClick={dragmodule} disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#184f90',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <div className="btnModule">
            <div className="d-flex">
                <Select
                    id="dropdown"
                    defaultValue={defaultValue}
                    style={{ borderRadius: '10px', width: '200px' }}
                    onChange={(e) => e.target.value}
                >
                    {dropdownmodule}
                </Select>

                <Button
                    className=" bg-primary p-1 px-3 mx-3"
                    onClick={addModule}
                    style={{ borderRadius: '13px', fontSize: '17px', }}>Add Module</Button>

                <Button
                    className="bg-primary py-2 px-4"
                    onClick={loadDefault}
                    disabled={click}
                    style={{ borderRadius: '15px', fontSize: '17px', }}>Load Default</Button>
                <FormControlLabel
                    className="py-2 px-4 ml-auto"
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked={pen} />}
                    label="PenZoom"
                />
                  <FormControlLabel
                    className="py-2 px-4"
                    control={<DragSwitch sx={{ m: 1 }} defaultChecked={drag} />}
                    label="Drag Module"
                />
                <Button
                    className=" bg-primary py-2 px-4 ml-auto"
                    onClick={saveLayOut}
                    style={{ borderRadius: '15px', fontSize: '17px', }}>Save</Button>

                <Button
                    className="bg-primary py-2 px-4 mx-2"
                    onClick={clearModule}
                    style={{ borderRadius: '15px', fontSize: '17px', }}>Clear</Button>


            </div>
        </div>
    )
}

export default ButtonModule;