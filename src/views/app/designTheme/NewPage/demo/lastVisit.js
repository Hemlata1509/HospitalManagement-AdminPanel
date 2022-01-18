import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody } from 'reactstrap'
import HeaderDemo from './headerDemo';


const LastVisit = () => {
    const lastVisitStyle = useSelector(state => state.style.styleData.lastVisit);
    const headerStyle = useSelector(state => state.style.styleData);

    return (
        <div >
            <div style={headerStyle.headerDivStyle}>
                <HeaderDemo
                    headerTitle="LAST VISIT"
                />
            </div>
            <Card style={lastVisitStyle.card}>
                <CardBody style={{ padding: '1vh 1vw' }}>
                    <div style={{ display: 'flex', }}>
                        <img src='../../../../../assets/img/profiles/1.jpg' alt="#"
                            style={lastVisitStyle.img} />
                        <div style={{ alignSelf: 'center', display: 'flex' }}>
                            <div>
                                <h2 style={lastVisitStyle.font}>
                                    Sarah Gardner, MD
                                </h2>
                            </div>
                            <div style={{ marginLeft: '150px' }}>
                                <p style={lastVisitStyle.paragraph}>23/07/2021</p>
                                <p style={lastVisitStyle.paragraph}>8:48 AM</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default LastVisit
