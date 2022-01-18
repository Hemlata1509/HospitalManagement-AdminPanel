/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Row, Button } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { HiOutlineRefresh } from 'react-icons/hi'
import { IoMdAdd } from 'react-icons/io'
import Breadcrumb from 'containers/navs/Breadcrumb';
import LocationTable from './locationTable';
import AddLocation from './addLocation';

const Location = ({ match }) => {
  const [modal, setmodal] = useState(false)

  const toggle = () => {
    setmodal(!modal);
  }

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.location" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardHeader className="bg-primary p-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 className="p-2 pt-3" >
                <IntlMessages id="menu.location" />
              </h2>
              <div>
                <Button className="bg-white p-2 px-3" onClick={toggle} style={{ borderRadius: '5px' }}>
                  <IoMdAdd style={{ fontSize: '35px', color: "black" }} />
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className="bg-white p-2 px-3" onClick={() => window.location.reload()} style={{ borderRadius: '5px' }}>
                  <HiOutlineRefresh style={{ fontSize: '35px', color: "black" }} />
                </Button>&nbsp;&nbsp;&nbsp;
              </div>
            </CardHeader>

            <CardBody>
              <AddLocation
                isOpen={modal}
                toggle={toggle}
              />
              <LocationTable />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  )
};
export default Location;
