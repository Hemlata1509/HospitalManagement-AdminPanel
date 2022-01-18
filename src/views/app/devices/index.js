import React, { useState } from 'react';
import { Row, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { HiOutlineRefresh } from 'react-icons/hi'
// import { useDispatch } from 'react-redux';
import { IoMdAdd } from 'react-icons/io';
import DeviceTable from './deviceTable';
import ModalDevice from './AddDevice'

const Devices = ({ match }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const dis = useDispatch()
  //   console.log(dis,"dis");

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.devices" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>


      <Card className="w-100 ">
        <CardHeader className="bg-primary p-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="p-2 pt-3" >
            All Devices
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

          <ModalDevice
            isOpen={modal}
            toggle={toggle}
            title="Add New Device"
          />
          <DeviceTable />
        </CardBody>
      </Card>

    </>
  );
}
export default Devices;
