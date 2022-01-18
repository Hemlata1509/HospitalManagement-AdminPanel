import React, { useState } from 'react';
import { Row, Card, CardBody, CardHeader, Button } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { HiOutlineRefresh } from 'react-icons/hi'
import { IoMdAdd } from 'react-icons/io'
import InfotileTable from './infotileTable';
import ModalBlock from './AddInfotile';

const Infotile = ({ match }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.infotile" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Card className="w-100 ">
        <CardHeader className="bg-primary p-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="p-2 pt-3" >
            <IntlMessages id="menu.infotile" />
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

          <ModalBlock
            isOpen={modal}
            toggle={toggle}
            title="New Infotile"
          />
          <InfotileTable />

        </CardBody>
      </Card>
    </>
  );
};

export default Infotile;
