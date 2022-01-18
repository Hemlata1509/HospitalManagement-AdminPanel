import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Row, Button } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { HiOutlineRefresh } from 'react-icons/hi'
import { IoMdAdd } from 'react-icons/io'
import PatientTable from './patientTable';
import AddPatient from './addPatient';

const Patient = ({ match }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }
  return (
    <div>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.patient" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardHeader className="bg-primary p-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 className="p-2 pt-3" >
                <IntlMessages id="menu.patient" />

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
              <AddPatient
                isOpen={modal}
                toggle={toggle}
              />
              <PatientTable />
            </CardBody>
          </Card>
        </Colxx>
      </Row>

    </div>
  )
};
export default Patient;
