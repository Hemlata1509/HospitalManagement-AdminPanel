/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    RadioGroup, Box, Divider, Radio,
    Drawer, List, ListItem, FormControlLabel,
    FormControl, ListItemText
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { changeLayout, updatePageData } from 'redux/layout/actions';
import { FormGroup, Label, Row } from 'reactstrap';
import setCurrentPage from 'redux/currentPage/actions';
import { Colxx } from 'components/common/CustomBootstrap';
import { updateThemeData, themeData } from 'redux/theme/actions';
import { ColorPicker } from 'material-ui-color';
import FormSample from './form';
import Layout from './layout';

const drawerWidth = 300;
const deviceData = JSON.parse(localStorage.getItem('device-data'));

function NewPage() {
    const dispatch = useDispatch();
    const defaultThemeData = useSelector(state => state.theme.themeData);
    const page = useSelector(state => state.currentPage)
    const [open, setOpen] = useState(true);
    const [bgId, setBgId] = useState('color');
    const [values, setValues] = useState([1]);

    useEffect(() => {
        dispatch(changeLayout(values));
    }, [dispatch]);

    useEffect(() => {
        dispatch(setCurrentPage(1))
        dispatch(themeData())
    },[]);


    const handleChange = (e, color1) => {
        if (color1) {
            color1.name = e
            const { name } = color1;
            const { backgroundColor } = color1.css
            const updateTheme = {
                ...defaultThemeData,
                [name]: backgroundColor,
            }
            dispatch(updateThemeData(updateTheme))
        } else if (color1 === undefined) {
            const { name, value } = e.target;
            const updateTheme = {
                ...defaultThemeData,
                [name]: value,
            }
            dispatch(updateThemeData(updateTheme))
        }
    };

    const onButtonClick = (id) => {
        dispatch(setCurrentPage(id));
    }

    const buttonList = () => {
        return values.map((i) => {
            return <li className="d-inline" key={i}><button type="button" onClick={() => onButtonClick(i)} className="btn btn-outline-dark" style={{ padding: '5px 10px', margin: '5px', backgroundColor: page === i ? 'black' : 'white', color: page === i ? 'white' : 'black' }} >
                {i}
            </button>
            </li>
        })
    }

    const onAddClick = () => {
        setValues([...values, values.length + 1]);
    }

    const onRemoveClick = () => {
        if (values.length !== 1) {
            values.splice(values.length - 1);
        }
        setValues([...values]);
        dispatch(updatePageData());
    }


    let response;
    const onBackgroundSelect = () => {
        if (bgId === 'color') {
            response = <FormGroup style={{ margin: '6px', lineHeight: '10px' }}>
                <ColorPicker style={{ width: 'auto' }} name="backgroundColor" onChange={(e) => handleChange('backgroundColor', e)}
                    value={defaultThemeData.backgroundColor} />
            </FormGroup>
        } else if (bgId === 'image') {
            response = <FormSample
                style={{ margin: '6px', lineHeight: '10px' }}
                htmlFor="bg_image" name="backgroundColor" id="bg_image"
                tooltipText="Background Image"
                target="bg_image" placeholder="Enter Image URL"
                type="text" value={defaultThemeData.backgroundColor} onChange={(e) => handleChange(e)}
            />
        }
        return response;
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawer = (
        <div className="drawerDiv">
            <div style={{ backgroundColor: '#252325', display: 'flex', justifyContent: 'space-between' }}>
                <img src="favicon.ico" style={{ height: '50px' }} alt="logo" />
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerClose}
                    edge="start"
                    sx={{ mr: 2, ...(open) }}
                    style={{ padding: '0' }}
                >
                    <MenuIcon style={{ fontSize: '40px', padding: '0', color: 'white' }} />
                </IconButton>
            </div>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <button
                    type="button" className="btn p-2"
                    style={{ borderRadius: '15px', cursor: 'auto', border: '1px solid black', fontWeight: 'bold', margin: '5px' }}>
                    {(deviceData.deviceType) ? deviceData.deviceType : 'Custom'}
                </button>{' '}

                <button
                    type="button" className="btn p-2"
                    style={{ borderRadius: '15px', cursor: 'auto', border: '1px solid black', fontWeight: 'bold', margin: '5px' }}>
                    {`${deviceData.heightSize}px * ${deviceData.widthSize}px`}
                </button>{' '}

                <button
                    type="button" className="btn p-2"
                    style={{ borderRadius: '15px', cursor: 'auto', border: '1px solid black', fontWeight: 'bold', margin: '5px' }}>
                    {deviceData.orientation}
                </button>{' '}
            </div>
            <Divider />
            <List>
                <ListItem button key="page">
                    <ListItemText><span style={{ fontSize: '20px', fontWeight: 'bold' }} >Page</span></ListItemText>
                    <button type="button" onClick={onRemoveClick} className="btn btn-outline-dark" style={{ padding: '5px 12px', margin: '5px', cursor: 'pointer' }} >-</button>
                    <button type="button" onClick={onAddClick} className="btn btn-outline-dark" style={{ padding: '5px 10px', margin: '5px', cursor: 'pointer' }} >+</button>
                </ListItem>
                <div style={{ display: 'flex' }}>
                    <ul className="list-group-horizontal" style={{ marginLeft: '-30px' }}>{buttonList()}</ul>
                </div>
            </List>
            <Divider />
            <List>
                <ListItem button key="page">
                    <ListItemText><span style={{ fontSize: '20px', fontWeight: 'bold' }} >Dashboard</span></ListItemText>
                </ListItem>
                <FormControl component="fieldset" >
                    <RadioGroup
                        aria-label="dashboardtype"
                        defaultValue="color"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel className="mx-4" style={{ marginBottom: '-5px' }} value="color" control={<Radio style={{ padding: '5px' }} />} id="color" label="Background Color" onClick={() => setBgId('color')} />
                        <FormControlLabel className="mx-4" style={{ marginBottom: '-5px' }} value="image" control={<Radio style={{ padding: '5px' }} />} id="image" label="Background Image" onClick={() => setBgId('image')} />
                    </RadioGroup>
                </FormControl>
                <div style={{ marginLeft: '20px' }} className="mx-3">
                    {onBackgroundSelect()}
                </div>
            </List>
            <Divider />
            <List>
                <ListItem button key="page">
                    <ListItemText><span style={{ fontSize: '20px', fontWeight: 'bold' }} >Module</span></ListItemText>
                </ListItem>
                <div className="theme">
                    <Colxx xxs="12">
                        <fieldset className="mx-3">
                            <legend>Header</legend>
                            <Row>
                                <Colxx xxs="6">
                                    <FormSample
                                        htmlFor="header_font_size" id="header_font_size"
                                        tooltipText="Header Font Size" target="header_font_size"
                                        label="Font Size:" type="number" name="moduleHeaderTextFontSize"
                                        value={defaultThemeData.moduleHeaderTextFontSize} onChange={(e) => handleChange(e)}
                                    />
                                </Colxx>

                                <Colxx xxs="6">
                                    <FormGroup >
                                        <Label style={{ fontSize: '15px' }} >Header Color</Label>
                                        <ColorPicker name="moduleHeaderBackgroundColor" onChange={(e) => handleChange('moduleHeaderBackgroundColor', e)}
                                            value={defaultThemeData.moduleHeaderBackgroundColor} />
                                    </FormGroup>
                                </Colxx>
                                <Colxx xxs="6">
                                    <FormGroup >
                                        <Label style={{ fontSize: '15px' }} >Font Color</Label>
                                        <ColorPicker name="moduleHeaderTextColor" onChange={(e) => handleChange('moduleHeaderTextColor', e)}
                                            value={defaultThemeData.moduleHeaderTextColor} />
                                    </FormGroup>
                                </Colxx>
                                <Colxx xxs="6">
                                    <FormGroup >
                                        <Label style={{ fontSize: '15px' }} >Box Shadow</Label>
                                        <ColorPicker name="moduleHeaderShadow" onChange={(e) => handleChange('moduleHeaderShadow', e)}
                                            value={defaultThemeData.moduleHeaderShadow} />
                                    </FormGroup>
                                </Colxx>
                            </Row>
                        </fieldset>
                        <fieldset className="mx-3">
                            <legend>Font</legend>
                            <Row>
                                <Colxx xxs="6">
                                    <FormGroup >
                                        <Label style={{ fontSize: '15px' }} >Font Color</Label>
                                        <ColorPicker name="moduleCellCardsTextPrimaryColor" onChange={(e) => handleChange('moduleCellCardsTextPrimaryColor', e)}
                                            value={defaultThemeData.moduleCellCardsTextPrimaryColor} />
                                    </FormGroup>
                                </Colxx>
                                <Colxx xxs="6">
                                    <FormSample
                                        htmlFor="font_size" id="font_size"
                                        tooltipText="Font Size" target="font_size"
                                        label="Size:" type="number" name="fontSize"
                                        value={defaultThemeData.fontSize} onChange={(e) => handleChange(e)}
                                    />
                                </Colxx>
                                <Colxx xxs="6">
                                    <FormGroup >
                                        <Label style={{ fontSize: '15px' }} >Paragraph Color</Label>
                                        <ColorPicker name="moduleCellTextColorPrimary" onChange={(e) => handleChange('moduleCellTextColorPrimary', e)}
                                            value={defaultThemeData.moduleCellTextColorPrimary} />
                                    </FormGroup>
                                </Colxx>
                            </Row>
                        </fieldset>
                        <fieldset className="mx-3">
                            <legend>Body</legend>
                            <Row>
                                <Colxx xxs="6">
                                    <FormGroup >
                                        <Label style={{ fontSize: '15px' }} >Body</Label>
                                        <ColorPicker name="moduleCellbackGroundColor" onChange={(e) => handleChange('moduleCellbackGroundColor', e)}
                                            value={defaultThemeData.moduleCellbackGroundColor} />
                                    </FormGroup>
                                </Colxx>
                                <Colxx xxs="6">
                                    <FormGroup >
                                        <Label style={{ fontSize: '15px' }} >Infotile</Label>
                                        <ColorPicker name="infoTileBackgroundColor" onChange={(e) => handleChange('infoTileBackgroundColor', e)}
                                            value={defaultThemeData.infoTileBackgroundColor} />
                                    </FormGroup>
                                </Colxx>
                                <Colxx xxs="6">
                                    <FormGroup >
                                        <Label style={{ fontSize: '15px' }} >Card</Label>
                                        <ColorPicker name="moduleCellCardsbackgroundColor" onChange={(e) => handleChange('moduleCellCardsbackgroundColor', e)}
                                            value={defaultThemeData.moduleCellCardsbackgroundColor} />
                                    </FormGroup>
                                </Colxx>
                            </Row>
                        </fieldset>
                        <fieldset className="mx-3">
                            <legend>Radius</legend>
                            <Row>
                                <Colxx xxs="3">
                                    <FormSample
                                        htmlFor="radius_top_left" id="radius_top_left"
                                        tooltipText="Top Left Radius" target="radius_top_left"
                                        label="T-left" type="number" name="moduleHeaderBorderRediusTopLeft"
                                        value={defaultThemeData.moduleHeaderBorderRediusTopLeft} onChange={(e) => handleChange(e)}
                                    />
                                </Colxx>
                                <Colxx xxs="3">
                                    <FormSample
                                        htmlFor="radius_top_right" id="radius_top_right"
                                        tooltipText="Top Right Radius" target="radius_top_right"
                                        label="T-right:" type="number" name="moduleHeaderBorderRediusTopRight"
                                        value={defaultThemeData.moduleHeaderBorderRediusTopRight} onChange={(e) => handleChange(e)}
                                    />
                                </Colxx>
                                <Colxx xxs="3">
                                    <FormSample
                                        htmlFor="radius_bottom_left" id="radius_bottom_left"
                                        tooltipText="Bottom Left Radius" target="radius_bottom_left"
                                        label="B-left:" type="number" name="moduleHeaderBorderRediusBottomLeft"
                                        value={defaultThemeData.moduleHeaderBorderRediusBottomLeft} onChange={(e) => handleChange(e)}
                                    />
                                </Colxx>
                                <Colxx xxs="3">
                                    <FormSample
                                        htmlFor="radius_bottom_right" id="radius_bottom_right"
                                        tooltipText="Bottom Right Radius" target="radius_bottom_right"
                                        label="B-right:" type="number" name="moduleHeaderBorderRediusBottomRight"
                                        value={defaultThemeData.moduleHeaderBorderRediusBottomRight} onChange={(e) => handleChange(e)}
                                    />
                                </Colxx>
                            </Row>
                        </fieldset>
                    </Colxx>
                </div>
            </List>
        </div>
    );

    return (
        <Row>
            <Colxx>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Colxx>
            <Colxx xxs={open === true ? "10" : "12"} style={{ padding: "10px 40px", }}>
                <Layout open={open} handleDrawerOpen={handleDrawerOpen} />
            </Colxx>
        </Row>
    );
}

export default NewPage;
