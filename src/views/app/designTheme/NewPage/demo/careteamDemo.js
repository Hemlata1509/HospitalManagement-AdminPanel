import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody } from 'reactstrap'
import HeaderDemo from './headerDemo';


const CareteamDemo = () => {
    const careteamStyle = useSelector(state => state.style.styleData.careteam);
    const headerStyle = useSelector(state => state.style.styleData);

    return (
        <div >
            <div style={headerStyle.headerDivStyle}>
                <HeaderDemo
                    headerTitle="CARETEAM"
                />
            </div>
            <Card style={careteamStyle.card}>
                <CardBody style={{ padding: '1vh 1vw' }}>
                    <div style={{ display: 'flex', }}>
                        <img src='../../../../../assets/img/profiles/1.jpg' alt="#"
                            style={careteamStyle.img} />
                        <div style={{ alignSelf: 'center' }}>
                            <h2 style={careteamStyle.font}>
                                Sarah Gardner, MD
                            </h2>
                            <p style={careteamStyle.paragraph}>Providers</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card style={careteamStyle.card}>
                <CardBody style={{ padding: '1vh 1vw' }}>
                    <div style={{ display: 'flex', }}>
                        <img src='../../../../../assets/img/profiles/2.jpg' alt="#"
                            style={careteamStyle.img} />
                        <div style={{ alignSelf: 'center' }}>
                            <h2 style={careteamStyle.font}>
                                Sarah Gardner, MD
                            </h2>
                            <p style={careteamStyle.paragraph}>Providers</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card style={careteamStyle.card}>
                <CardBody style={{ padding: '1vh 1vw' }}>
                    <div style={{ display: 'flex', }}>
                        <img src='../../../../../assets/img/profiles/3.jpg' alt="#"
                            style={careteamStyle.img} />
                        <div style={{ alignSelf: 'center' }}>
                            <h2 style={careteamStyle.font}>
                                Sarah Gardner, MD
                            </h2>
                            <p style={careteamStyle.paragraph}>Providers</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default CareteamDemo
