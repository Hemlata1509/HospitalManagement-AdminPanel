import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody } from 'reactstrap'
import HeaderDemo from './headerDemo';


const NextRound = () => {
    const headerStyle = useSelector(state => state.style.styleData);
    const nextRoundStyle = useSelector(state => state.style.styleData.nextRound);

    return (
        <div >
            <div style={headerStyle.headerDivStyle}>
                <HeaderDemo
                    headerTitle="NEXT ROUND"
                />
            </div>
            <Card style={nextRoundStyle.card}>
                <CardBody style={{ padding: '1vh 1vw' }}>
                    <div style={{ display: 'flex', }}>
                        <img src='../../../../../assets/img/profiles/1.jpg' alt="#"
                            style={nextRoundStyle.img} />
                        <div style={{ alignSelf: 'center', display: 'flex' }}>
                            <div>
                                <h2 style={nextRoundStyle.font}>
                                    Sarah Gardner, MD
                                </h2>
                            </div>
                            <div style={{ marginLeft: '150px' }}>
                                <p style={nextRoundStyle.paragraph}>23/07/2021</p>
                                <p style={nextRoundStyle.paragraph}>8:48 AM</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default NextRound
