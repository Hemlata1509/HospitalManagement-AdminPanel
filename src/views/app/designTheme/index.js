import React from 'react';
import { Card, CardHeader, Row, CardBody } from 'reactstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Selection from './selection';

const NewPage = ({ match }) => {
    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="menu.designTheme" match={match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>
            <Row>
                <Colxx xxs="12" style={{ textAlign: '-webkit-center' }}>
                    <Card style={{ width: '75%' }}>
                        <CardHeader className="bg-primary p-3 ">
                            <h2>
                                Design Your Own Theme
                            </h2>
                        </CardHeader>
                        <CardBody className="text-left" style={{padding:'0px'}}>
                            <Selection />
                        </CardBody>
                    </Card>
                </Colxx>
            </Row>
        </>
    )
}

export default NewPage
