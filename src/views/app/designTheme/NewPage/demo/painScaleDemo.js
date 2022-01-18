import React from 'react';
import { useSelector } from 'react-redux';
// import { Card } from 'reactstrap';
import { FaSmile } from 'react-icons/fa'
import HeaderDemo from './headerDemo';

const PainScale = () => {
    const headerStyle = useSelector(state => state.style.styleData)
    const painScaleStyle = useSelector(state => state.style.styleData.painScale)

    return (
        <div>
            <div style={headerStyle.headerDivStyle} >
                <HeaderDemo headerTitle="PAIN SCALE" />
            </div>
            <div className="row" >
                <FaSmile className="col-6" style={{ fontSize: '150px', color: 'green' }} />
                <div className="col-6" style={{ alignSelf: 'center', marginLeft: '-30px' }} >
                    <div style={painScaleStyle.font}>Pain Level : </div>
                    <div style={painScaleStyle.font2}>0</div>
                    <div style={painScaleStyle.font}>Pain Goal : 0</div>
                </div>
            </div>
        </div>
    )
}

export default PainScale
