/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-useless-concat */
// eslint-disable-line no-console
/* eslint-disable  no-unused-expressions */

import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import { generate } from 'shortid';
import styleTheme from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import PanZoom from 'react-easy-panzoom';
import { setDragAction, setPenAction } from 'redux/dragAndPen/actions';
import { Row, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import { IconButton, MenuItem } from '@mui/material';
import { updateLayoutData } from 'redux/layout/actions';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonModule from '../buttonModule';
// import FormSample from './form';
import { updateThemeData } from '../../../../redux/theme/actions';
import styleData from '../../../../redux/style/actions';
// import ModalBlock from '../../modal';
import '../../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../../node_modules/react-resizable/css/styles.css';


let c = 0;

const deviceData = JSON.parse(localStorage.getItem('device-data'));

const Layout = ({ handleDrawerOpen, open }) => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.currentPage)
    const defaultThemeData = useSelector(state => state.theme.themeData);
    const divStyle = useSelector(state => state.style.styleData);
    const layoutData = useSelector(state => state.layout.layoutData)
    // const layoutIndex = useSelector(state => state.layout.layoutData[page]);
    const defaultLayout = useSelector(state => state.dataLayout.layoutData);
    const allLayoutlist = useSelector(state => state.allLayout.layoutData);
    const pen = useSelector(state => state.pen);
    const drag = useSelector(state => state.drag);
    // const [layOut, setLayOut] = useState([]);
    const [list, setList] = useState([]);
    const [modal, setModal] = useState(false);
    const [click, setClick] = useState(false);

    const gridWid = deviceData.orientation === 'Landscape' ? deviceData.widthSize : deviceData.heightSize
    const divWid = deviceData.orientation === 'Landscape' ? `${deviceData.widthSize}px` : `${deviceData.heightSize}px`
    const gridHei = deviceData.orientation === 'Landscape' ? `${deviceData.heightSize}px` : `${deviceData.widthSize}px`
    const divHei = deviceData.orientation === 'Landscape' ? `${deviceData.heightSize}px` : `${deviceData.widthSize}px`

    const Preview = styleTheme.div`
    // border: 1px solid #000000;
    border-radius: 10px;
    width: ${divWid};
    height: ${divHei};
    overflow:hidden;
    margin:0;
    padding:0
 `;

    const toggle = () => {
        setModal(!modal)
    }

    const clearModuleClick = () => {
        setList([]);
    }



    const preloadFunction = () => {
        const data = [];
        layoutData[page - 1] ? layoutData[page - 1].map(li => {
            return allLayoutlist.map(al => {
                return al.i === li.i ? data.push({ ...al, ...li }) : li;
            })
        }) : null;
        setList(data);
        dispatch(updateLayoutData(data, page - 1))
        setClick(false);
        return data;
    }

    useEffect(() => {
        if (page) {
            preloadFunction();
        }
    }, [page])

    useEffect(() => {
        dispatch(setPenAction(false));
        dispatch(setDragAction(true));

    }, [dispatch]);

    useEffect(() => {
        dispatch(styleData(defaultThemeData));
    }, [defaultThemeData])
    const dropdownmodule = () => {
        return allLayoutlist.map(module =>
            <MenuItem
                key={module.i}
                value={module.i}
            >
                {module.i.charAt(0).toUpperCase() + module.i.slice(1)}
            </MenuItem>
        )
    }

    const addModuleClick = (val) => {
        allLayoutlist.map(layout => {
            const l1 = { ...layout, c }
            c += 1
            if (layout.i === val) {
                const result = { ...l1, key: generate() }
                // console.log(result)
                setList([...list, result]);
                dispatch(updateLayoutData([...list, result], page - 1))
            }

            return list;
        })
        setClick(true)
    }

    const createLayout = (e) => {
        // console.log('---------------------', e)
        const result = e.map(el => {
            // console.log(el)
            // return { ...el, static: true }
            return el
        });
        dispatch(updateLayoutData(result, page - 1));

    }

    const StyleData = {
        backgroundColor: "#181819BD",
        moduleHeaderBackgroundColor: "#000000",
        moduleHeaderTextColor: ' #FFFFFF',
        moduleHeaderShadow: '#00000033',
        moduleHeaderTextFontSize: '25px',
        moduleHeaderBorderRediusTopLeft: '10px',
        moduleHeaderBorderRediusTopRight: '10px',
        moduleHeaderBorderRediusBottomLeft: '10px',
        moduleHeaderBorderRediusBottomRight: '10px',
        moduleHeaderShadowColor: '#00000033',
        infoTileBackgroundColor: '#2d3748',
        infoTilegridColumn: 2,
        moduleCellCardsTextPrimaryColor: 'black',
        moduleCellCardsTextSecondaryColor: 'black',
        moduleCellCardsbackgroundColor: 'rgba(245, 242, 242, 0.91)',
        moduleCellCardsBorderRediusTopLeft: '10px',
        moduleCellCardsBorderRediusTopRight: '10px',
        moduleCellCardsBorderRediusBottomLeft: '10px',
        moduleCellCardsBorderRediusBottomRight: '10px',
        moduleCellShadowColor: '#00000033',
        moduleCellTextColorPrimary: 'white',
        moduleCellTextColorSecondary: 'black',
        moduleCellbackGroundColor: '#d1d1de59'
    }

    const saveLayOut = async () => {
        const dataTheme = await {
            "height": gridHei,
            "width": gridWid,
            "themeName": `${defaultThemeData.themeName}`,
            "theme": { "lightTheme": defaultThemeData, "darkTheme": StyleData },
            "layout": layoutData
        }
        await axios(`${process.env.REACT_APP_API}themes`, {
            method: 'POST',
            data: dataTheme,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res)
            return res;
        })
        setModal(!modal);
    }

    const onCancelClick = () => {
        setModal(!modal);
    }

    const removeModuleClick = (key) => {
        const items = list.filter((i) => {
            return i.i !== key;
        });
        const index = list.findIndex((o) => {
            return o.i === key;
        })
        if (index !== -1) list.splice(index, 1);
        setList(items);
    }

    const loadDefaultClick = () => {
        dispatch(styleData(defaultThemeData))
        const value = list.map(l => {
            return l.i;
        })
        const items = defaultLayout.filter((i) => {
            return value.map(v => {
                return i.i === v;
            })
        });
        setList(items);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updateTheme = {
            ...defaultThemeData,
            [name]: value,
        }
        dispatch(updateThemeData(updateTheme))
    };
    return (
        <div>
            <Row className="mt-3">
                <Colxx style={{ textAlign: 'center', paddingRight: '0' }} xxs={open === true ? "0" : "1"}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        style={{ padding: '0' }}
                    >
                        <MenuIcon style={{ fontSize: '40px', padding: '0' }} />
                    </IconButton>
                </Colxx>
                <Colxx xxs="11">
                    <ButtonModule
                        saveLayOut={toggle}
                        dropdownmodule={dropdownmodule()}
                        clearModule={() => clearModuleClick()}
                        addModule={() => addModuleClick(document.getElementById('dropdown').textContent.toLowerCase())}
                        loadDefault={() => loadDefaultClick()}
                        enablePenZoom={() => dispatch(setPenAction(!pen))}
                        dragmodule={() => dispatch(setDragAction(!drag))}
                        drag={drag}
                        pen={pen}
                        click={click}
                        defaultValue='header'
                    />
                </Colxx>
            </Row>
            <Separator className="mt-3" />
            <PanZoom autoCenter disabled={pen === false} disableDoubleClickZoom={pen === false} style={{
                height: '800px',
                width: '100%',
                border: '2px solid #000000',
                overflow: 'hidden',
            }}>
                <Preview style={{ textAlign: '-webkit-center' }}>
                    <GridLayout
                        isBounded
                        isResizable
                        isDraggable={drag}
                        preventCollision
                        layout={layoutData[page - 1]}
                        onDragStop={(e) => createLayout(e)}
                        onLayoutChange={(e) => createLayout(e)}
                        allowOverlap
                        verticalCompact={false}
                        style={{
                            height: `${gridHei}`,
                            backgroundColor: defaultThemeData.backgroundColor, backgroundImage: "url(" + `${defaultThemeData.backgroundColor}` + ")",
                            borderRadius: '10px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                        }}
                        cols={12}
                        rowHeight={25}
                        width={gridWid}
                    >
                        {list.map(layout => {
                            return (
                                <div
                                    key={layout.i}
                                    data-grid={{
                                        x: layout.x,
                                        y: layout.y,
                                        w: layout.w,
                                        h: layout.h,
                                    }}
                                    role="grid"
                                    style={divStyle[layout.divStyle]}
                                >
                                    {layout.component}
                                    <div
                                        id={layout.i}
                                        role="button"
                                        onClick={() => removeModuleClick(layout.i)}
                                        className="px-3"
                                        style={{
                                            position: 'fixed',
                                            fontSize: '28px',
                                            cursor: 'pointer',
                                            top: '0',
                                            right: '0',
                                            color: 'white'
                                        }}>
                                        x
                                    </div>
                                </div>
                            );
                        })}
                    </GridLayout>
                </Preview>
            </PanZoom>
            <Modal isOpen={modal} toggle={() => toggle()}>
                <ModalHeader className="bg-primary" style={{ justifyContent: 'center' }}>
                    <span style={{fontWeight:'400',fontSize:'30px'}}>Save Design</span>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Colxx xxs="12">
                            <Label style={{ fontWeight: 'bold', fontSize: '20px' }}>Enter your Custom Theme Name:</Label>
                            <br /><br />
                            <Input
                                style={{ borderRadius: '20px', width: '100%', fontSize: '18px', height: '60%' }}
                                id="themeName"
                                name="themeName"
                                placeholder="Enter Your Theme Name"
                                type="text"
                                value={defaultThemeData.themeName}
                                onChange={(e) => handleChange(e)}
                            />
                        </Colxx>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <button type="submit" className="bg-primary" onClick={() => saveLayOut()} style={{ border: 'none', width: '20%', height: '60px', fontSize: '20px', borderRadius: "20px", padding: "10px 20px" }}>
                        Save
                    </button>
                    <button type="button" className="bg-primary" onClick={() => onCancelClick()} style={{ border: 'none', width: '20%', height: '60px', fontSize: '20px', borderRadius: "20px", padding: "10px 20px" }}>
                        Cancel
                    </button>
                </ModalFooter>
            </Modal>
            {/* <ModalBlock
                isOpen={modal}
                toggle={() => toggle()}
                title="Save Design"
                body={
                    <Row>
                        <Colxx xxs="12">
                            <Label style={{ fontWeight: 'bold', fontSize: '20px' }}>Enter your Custom Theme Name:</Label>
                            <br /><br />
                            <Input
                                style={{ borderRadius: '10px', width: '100%', fontSize: '18px', height: '70%' }}
                                id="themeName"
                                name="themeName"
                                placeholder="Enter Your Theme Name"
                                type="text"
                                value={defaultThemeData.themeName}
                                onChange={(e) => handleChange(e)}
                            />
                        </Colxx>
                    </Row>
                }
                button1="Save"
                button2="Cancel"
                onSubmitClick={saveLayOut}
                onCancelClick={onCancelClick}
            /> */}
        </div>
    )
}

export default Layout;