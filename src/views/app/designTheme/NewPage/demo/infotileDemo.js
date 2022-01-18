import React from 'react';
import { Card } from 'reactstrap';
import { useSelector } from 'react-redux';

const InfotileDemo = () => {
    const infotileStyle = useSelector(state => state.style.styleData.infotiles)
    return (
        <div className="text-center">
            <div style={{ display: 'flex' }}>
                <Card style={infotileStyle.card1}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>CPs</h1>
                        <p style={infotileStyle.paragraph}>CONTACT</p>
                    </div>
                </Card>
                <Card style={infotileStyle.card2}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>AP</h1>
                        <p style={infotileStyle.paragraph}>AIRBRONE</p>
                    </div>
                </Card>
            </div>
            <div style={{ display: 'flex' }}>
                <Card style={infotileStyle.card3}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>DP</h1>
                        <p style={infotileStyle.paragraph}>DROPLET</p>
                    </div>
                </Card>
                <Card style={infotileStyle.card4}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>LA</h1>
                        <p style={infotileStyle.paragraph}>LATEX</p>
                    </div>
                </Card>
            </div>
            <div style={{ display: 'flex' }}>
                <Card style={infotileStyle.card2}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>CPs</h1>
                        <p style={infotileStyle.paragraph}>CONTACT</p>
                    </div>
                </Card>
                <Card style={infotileStyle.card1}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>AP</h1>
                        <p style={infotileStyle.paragraph}>AIRBRONE</p>
                    </div>
                </Card>
            </div>
            <div style={{ display: 'flex' }}>
                <Card style={infotileStyle.card4}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>DP</h1>
                        <p style={infotileStyle.paragraph}>DROPLET</p>
                    </div>
                </Card>
                <Card style={infotileStyle.card3}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>LA</h1>
                        <p style={infotileStyle.paragraph}>LATEX</p>
                    </div>
                </Card>
            </div>
            <div style={{ display: 'flex' }}>
                <Card style={infotileStyle.card1}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>CPs</h1>
                        <p style={infotileStyle.paragraph}>CONTACT</p>
                    </div>
                </Card>
                <Card style={infotileStyle.card2}>
                    <div className="col">
                        <h1 style={infotileStyle.font}>AP</h1>
                        <p style={infotileStyle.paragraph}>AIRBRONE</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default InfotileDemo;
