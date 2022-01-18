import React, { useEffect } from 'react';
import { Row, Card, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { adminRoot } from 'constants/defaultValues';

const Error = () => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    <>
      <div className="fixed-background" />
      <main>
        <div className="container">
          <Row className="h-100">
            <Colxx xxs="12" md="10" className="mx-auto my-auto">
              <Card className="auth-card mt-4">
                
                <div className="position-relative image-side " >
                  {/* <p className="text-default h2">MAGIC IS IN THE DETAILS</p> */}
                  <p className="text-muted h5 mb-3 ">Yes, it is indeed!</p>
                </div>

                <div className="form-side" 
                style={{ backgroundColor: 'lightgrey'}}
                >
                  {/* <NavLink to="/" className="white">
                    <span className="logo-single" />
                  </NavLink> */}

                  <CardTitle className="mb-5">
                    <IntlMessages id="pages.error-title" />
                  </CardTitle>

                  <p className="mb-0 text-muted mt-5" style={{fontSize:'20px'}}>
                    <IntlMessages id="pages.error-code" />
                  </p>

                  <p className="display-1 font-weight-bold mb-5">404</p>

                  <NavLink
                   style={{fontSize: '17px',borderRadius:'23px', marginTop: "4vh", }}
                    to={adminRoot}
                    className="btn btn-primary btn-shadow btn-lg"
                  >
                    <IntlMessages id="pages.go-back-home" />
                  </NavLink>

                </div>
              </Card>
            </Colxx>
          </Row>
        </div>
      </main>
    </>
  );
};

export default Error;
