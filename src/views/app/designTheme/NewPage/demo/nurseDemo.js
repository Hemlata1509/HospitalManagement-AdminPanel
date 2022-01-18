import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody } from 'reactstrap';
import HeaderDemo from './headerDemo'

const NurseBoardDemo = () => {
    const nurseStyle = useSelector(state => state.style.styleData.nurseboard);
    const headerStyle = useSelector(state => state.style.styleData)
    return (
        <div>
            <div style={headerStyle.headerDivStyle}>
                <HeaderDemo
                    headerTitle="NURSE BOARD"
                />
            </div>
            <Card style={nurseStyle.card}>
                <CardBody style={{ padding: '3px' }}>
                    <p style={nurseStyle.paragraph}>This is demo Nurse Note.</p>
                </CardBody>
            </Card>
            <Card style={nurseStyle.card}>
                <CardBody style={{ padding: '3px' }}>
                    <p style={nurseStyle.paragraph}>This is demo Nurse Note 2.</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default NurseBoardDemo
