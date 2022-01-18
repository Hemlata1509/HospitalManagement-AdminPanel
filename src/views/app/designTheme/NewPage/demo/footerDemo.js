import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import { useSelector } from 'react-redux';

const FooterDemo = () => {
    const footerStyle = useSelector(state => state.style.styleData.footer);
    return (
        <div>
            <Row>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src='../../../../../assets/img/hci/blue-left-arrow.png' style={footerStyle.footerImg} />
                        {/* <i className="simple-icon-arrow-left" style={{ fontSize: 'x-large' }} /> */}
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/blue_power.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/admin_lock_icon.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/blue_drawicon.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/blue_education.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/blue_moon.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/brightness_icon.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/clean.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/blue_visitorlog.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/blue_fullydimmable.png" style={footerStyle.footerImg} />
                    </div>
                </Colxx>
                <Colxx>
                    <div style={footerStyle.footerButton}>
                        <img alt="#" src="../../../../../assets/img/hci/blue_right_arrow.png" style={footerStyle.footerImg} />
                        {/* <i className="simple-icon-arrow-right" style={{ fontSize: 'x-large' }} /> */}
                    </div>
                </Colxx>
            </Row>
        </div>
    )
}

export default FooterDemo
