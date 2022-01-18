import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody } from 'reactstrap';
import HeaderDemo from './headerDemo';

const MedicationDemo = () => {
    const medicationStyle = useSelector(state => state.style.styleData.next_medication);
    const headerStyle = useSelector(state => state.style.styleData)
    return (
        <div>
            <div style={headerStyle.headerDivStyle}>
                <HeaderDemo
                    headerTitle="NEXT MEDICATION"
                />
            </div>
            <Card style={medicationStyle.card}>
                <CardBody style={{ padding: '3px' }}>
                    <div style={{ display: 'flex', }}>
                        <img src='../../../../../assets/img/profiles/123.png' alt="#"
                            style={medicationStyle.img}
                        />
                        <div>
                            <h2 style={medicationStyle.font}>abc</h2>
                            <p style={medicationStyle.paragraph}>23-09-2021</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card style={medicationStyle.card}>
                <CardBody style={{ padding: '3px' }}>
                    <div style={{ display: 'flex', }}>
                        <img src='../../../../../assets/img/profiles/123.png' alt="#"
                            style={medicationStyle.img}
                        />
                        <div>
                            <h2 style={medicationStyle.font}>abc</h2>
                            <p style={medicationStyle.paragraph}>23-09-2021</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default MedicationDemo
