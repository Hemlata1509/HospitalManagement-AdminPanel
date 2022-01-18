import React, { useState } from 'react';
import { FormGroup, Input, Button, Row, Label } from 'reactstrap';
// import { FiArrowRight } from 'react-icons/fi'
import { Colxx, Separator } from 'components/common/CustomBootstrap';

let deviceWidth = '';
let deviceHeight = '';

const Selection = () => {
    const [deviceSelect, setDeviceSelect] = useState('selectDevice')
    const [id, setId] = useState('Desktop');
    const [orientation, setOrientation] = useState('Landscape');
    const [heightSize, setHeightSize] = useState('');
    const [widthSize, setWidthSize] = useState('');

    const style = {
        h3: { fontWeight: 'bold' },
        div: { display: 'flex', justifyContent: 'space-around' },
        formGroup: { display: 'flex', },
        h6: { width: '20%', padding: '6px', },
        input: { width: '30%' },
        section: { padding: '15px 35px' },
        sectionDisable: { padding: '15px 35px', backgroundColor: '#e9ecef' },
        icon: { fontSize: '100px', fontStyle: 'initial' },
        cursor: { cursor: 'pointer' }
    }
    const deviceSize = [
        { key: 'iPhone', heightSize: '768', widthSize: '1024' },
        { key: 'iPad-Pro', heightSize: '1024', widthSize: '1366' },
        // { key: 'Tablet', heightSize: '1050', widthSize: '2048' },
        { key: 'Desktop', heightSize: '1080', widthSize: '1920' },
    ];

    const handleDeviceChange = () => {
        deviceSize.map(d => {
            if (id === "iPhone" && d.key === "iPhone") {
                deviceHeight = d.heightSize;
                deviceWidth = d.widthSize
            } else if (id === "iPad-Pro" && d.key === "iPad-Pro") {
                deviceHeight = d.heightSize;
                deviceWidth = d.widthSize
            }
            else if (id === "Desktop" && d.key === "Desktop") {
                deviceHeight = d.heightSize;
                deviceWidth = d.widthSize
            }
            return { deviceHeight, deviceWidth };
        })
    }
    const handleCustomDevice = (e) => {
        setId('')
        const { value } = e.target;
        deviceHeight = undefined;
        deviceWidth = undefined;
        if (e.target.id === 'height') {
            setHeightSize(value);
        } else if (e.target.id === 'width') {
            setWidthSize(value);
        }
    }

    let response;
    const handleDeviceSelection = () => {
        if (deviceSelect === 'selectDevice') {
            response = <section >
                <div style={style.section}>
                    <h3 style={style.h3}>Select your Device:</h3>
                    <div style={style.div} className="text-center" onChange={handleDeviceChange()}>

                        <div style={{
                            cursor: 'pointer', padding: '10px', border: id === 'iPhone' ? '2px solid black' : 'none',
                            backgroundColor: id === 'iPhone' ? 'aliceblue' : 'white'
                        }}>
                            <i style={style.icon} className="iconsminds-apple-bite" id="iPhone" aria-hidden="true"
                                onClick={() => setId('iPhone')}>
                                <h6>iPhone</h6>
                            </i>
                        </div>

                        <div style={{
                            cursor: 'pointer', padding: '10px', border: id === 'iPad-Pro' ? '2px solid black' : 'none',
                            backgroundColor: id === 'iPad-Pro' ? 'aliceblue' : 'white'
                        }}>
                            <i style={style.icon} className="iconsminds-tablet-3" id="iPad-Pro" aria-hidden="true"
                                onClick={() => setId('iPad-Pro')}>
                                <h6>iPad-Pro</h6>
                            </i>
                        </div>

                        {/* <div style={{
                            cursor: 'pointer', padding: '10px', border: id === 'Tablet' ? '2px solid black' : 'none',
                            backgroundColor: id === 'Tablet' ? 'aliceblue' : 'white'
                        }}>
                            <i style={style.icon} className="iconsminds-tablet-3" id="Tablet" aria-hidden="true"
                                onClick={() => setId('Tablet')}>
                                <h6>Tablet</h6>
                            </i>
                        </div> */}
                        <div style={{
                            cursor: 'pointer', padding: '10px', border: id === 'Desktop' ? '2px solid black' : 'none',
                            backgroundColor: id === 'Desktop' ? 'aliceblue' : 'white'
                        }}>
                            <i style={style.icon} className="iconsminds-monitor---laptop" id="Desktop" aria-hidden="true"
                                onClick={() => setId('Desktop')}>
                                <h6>Desktop</h6>
                            </i>
                        </div>
                    </div>
                </div>
                <Separator />
                <div style={style.sectionDisable} >
                    <h3 style={style.h3}>Add Custom Device:</h3>
                    <div style={{ marginTop: '20px' }}>
                        <FormGroup style={style.formGroup}>
                            <h6 style={style.h6}>Enter Device Height (pixels):</h6>
                            <Input style={style.input} type="number" id="height" disabled />
                        </FormGroup>
                        <FormGroup style={style.formGroup}>
                            <h6 style={style.h6}>Enter Device Width (pixels):</h6>
                            <Input style={style.input} type="number" id="width" disabled />
                        </FormGroup>
                    </div>
                </div>
            </section>
        } else if (deviceSelect === 'addCustomDevice') {
            response = <section >
                <div style={style.sectionDisable}>
                    <h3 style={style.h3}>Select your Device:</h3>
                    <div style={style.div} className="text-center">

                        <div style={{ padding: '10px' }}>
                            <i style={style.icon} className="iconsminds-apple-bite" id="iPhone" aria-hidden="true">
                                <h6>iPhone</h6>
                            </i>
                        </div>

                        <div style={{ padding: '10px' }}>
                            <i style={style.icon} className="iconsminds-tablet-3" id="iPad-Pro" aria-hidden="true">
                                <h6>iPad-Pro</h6>
                            </i>
                        </div>

                        {/* <div style={{ padding: '10px' }}>
                            <i style={style.icon} className="iconsminds-tablet-3" id="Tablet" aria-hidden="true">
                                <h6>Tablet</h6>
                            </i>
                        </div> */}
                        <div style={{ padding: '10px' }}>
                            <i style={style.icon} className="iconsminds-monitor---laptop" id="Desktop" aria-hidden="true">
                                <h6>Desktop</h6>
                            </i>
                        </div>
                    </div>
                </div>
                <Separator />
                <div style={style.section} >
                    <h3 style={style.h3}>Add Custom Device:</h3>
                    <div style={{ marginTop: '20px' }}>
                        <FormGroup style={style.formGroup}>
                            <h6 style={style.h6}>Enter Device Height (pixels):</h6>
                            <Input style={style.input} type="number" id="height" onChange={handleCustomDevice} />
                        </FormGroup>
                        <FormGroup style={style.formGroup}>
                            <h6 style={style.h6}>Enter Device Width (pixels):</h6>
                            <Input style={style.input} type="number" id="width" onChange={handleCustomDevice} />
                        </FormGroup>
                    </div>
                </div>
            </section>
        }
        return response;
    }

    const handleOrientation = () => {
        if (orientation === 'Landscape') {
            console.log("Landscape");
        } else if (orientation === 'Potrait') {
            console.log('Potrait');
        }
    }

    const dataOfDevice = () => {
        return {
            deviceType: id,
            heightSize: deviceHeight === undefined ? heightSize : deviceHeight,
            widthSize: deviceWidth === undefined ? widthSize : deviceWidth,
            orientation
        }
    }

    const openInNewTab = () => {
        window.open('/newTheme', '_blank')
        localStorage.setItem('device-data', JSON.stringify(dataOfDevice()))
    }

    return (
        <div>
            <section style={style.section}>
                <Row style={{ marginLeft: '20px' }} onClick={() => handleDeviceSelection()}>
                    <Colxx xxs="2" style={{ cursor: 'pointer' }}>
                        <h5>
                            <Input style={style.cursor} type="radio" defaultChecked id="selectDevice" name="Device" onClick={() => setDeviceSelect('selectDevice')} />
                            <Label style={style.cursor} for="selectDevice">Select a Device</Label>
                        </h5>
                    </Colxx>
                    <Colxx xxs="2" style={{ cursor: 'pointer' }}>
                        <h5>
                            <Input style={style.cursor} type="radio" id="addCustomDevice" name="Device" onClick={() => setDeviceSelect('addCustomDevice')} />
                            <Label style={style.cursor} for="addCustomDevice">Add Custom Device</Label>
                        </h5>
                    </Colxx>
                </Row>
            </section>
            <Separator />
            {handleDeviceSelection()}
            <Separator />
            <section style={style.section}>
                <h3 style={style.h3}>Select Orientation:</h3>
                <div style={{ display: 'flex', marginTop: '20px' }} onChange={handleOrientation()}>
                    <div style={{ marginLeft: '20px' }}>
                        <h5>
                            <Input style={style.cursor} type="radio" id="landscape" defaultChecked value="Landscape" name="Orientation" onClick={() => setOrientation('Landscape')} />
                            <Label style={style.cursor} for="landscape">Landscape</Label>
                        </h5>
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <h5>
                            <Input style={style.cursor} type="radio" id="potrait" value="Potrait" name="Orientation" onClick={() => setOrientation('Potrait')} />
                            <Label style={style.cursor} for="potrait">Potrait</Label>
                        </h5>
                    </div>
                </div>
            </section>
            <Separator />
            <section className="text-right" style={style.section}>
                <Button className="bg-primary" onClick={() => openInNewTab()} style={{border:'none', borderRadius:'5px'}}>
                    Continue
                    {/* <FiArrowRight style={{ fontSize: '20px' }} /> */}
                </Button>
            </section>
        </div>
    )
}

export default Selection
