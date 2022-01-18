import React, { useState } from 'react';
import IntlMessages from 'helpers/IntlMessages';
import { Row, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { HiOutlineRefresh } from 'react-icons/hi'
import { IoMdAdd } from 'react-icons/io'
import Breadcrumb from 'containers/navs/Breadcrumb';
import MedicationTable from './medicationTable';
import AddMedication from './AddMedication';


const Medication = ({ match }) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.medication" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Card className="w-100">
        <CardHeader className="bg-primary p-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="p-2 pt-3" >
            <IntlMessages id="menu.medication" />
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

          <AddMedication
            isOpen={modal}
            toggle={toggle}
            title="New Infotile"
          />

          <MedicationTable />
        </CardBody>
      </Card>
    </>
  );
}
export default Medication;
