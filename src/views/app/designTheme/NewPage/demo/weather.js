import React from 'react';
import { useSelector } from 'react-redux';
// import { Card } from 'reactstrap';
import { BsFillCloudFill } from 'react-icons/bs'
import HeaderDemo from './headerDemo';

const Weather = () => {
    const headerStyle = useSelector(state => state.style.styleData)
    const weatherStyle = useSelector(state => state.style.styleData.weather)

    return (
        <div>
            <div style={headerStyle.headerDivStyle} >
                <HeaderDemo headerTitle="WEATHER" />
            </div>
            <div className="row" style={{ height: '150px' }}>
                <BsFillCloudFill className="col-6" style={{ fontSize: '150px', color: 'gray' }} />
                <h1 className="col-6" style={weatherStyle.font2}>43°</h1>
            </div>
            <div>
                <h2 style={weatherStyle.font}>Loveland</h2>
            </div>
        </div>
    )
}

export default Weather;
