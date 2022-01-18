import { Separator } from 'components/common/CustomBootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import HeaderDemo from './headerDemo'

const PatientDemo = () => {
    const patientboardStyle = useSelector(state => state.style.styleData.patientschedule);
    const headerStyle = useSelector(state => state.style.styleData)
    return (
        <div>
            <div style={headerStyle.headerDivStyle}>
                <HeaderDemo
                    headerTitle="PATIENT BOARD"
                />
            </div>
            <div row="true" style={{ display: 'flex', padding: '5px', justifyContent: 'space-between', margin: '3px 4px' }}>
                <p style={patientboardStyle.paragraph}>28-09-1998</p>
                <p style={patientboardStyle.paragraph}>02:45 pm</p>
                <Button style={patientboardStyle.pButton}>
                    X-ray
                </Button>
            </div>
            <Separator />
            <div row="true" style={{ display: 'flex', padding: '5px', justifyContent: 'space-between', margin: '3px 4px' }}>
                <p style={patientboardStyle.paragraph}>28-09-1998</p>
                <p style={patientboardStyle.paragraph}>02:45 pm</p>
                <Button style={patientboardStyle.pButton}>
                    X-ray
                </Button>
            </div>
            <Separator />
            {/* <p style={fontStyle}>In Progress</p> */}
        </div>
    )
}

export default PatientDemo
