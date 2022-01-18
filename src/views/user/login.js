import React, { useEffect } from 'react';
import { Row, Card, CardTitle, CardBody, FormGroup, Form, Input, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { adminRoot } from 'constants/defaultValues';


const Login = () => {
  const history = useHistory()
 
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  const handleLogin = () => {
    history.push(adminRoot)
  }

  return (
    <>

      <div className="fixed-background" />
      <main >
        <div className="container">
          <Row className="h-100">
            <Colxx xxs="12" md="10" className="mx-auto my-auto">
              <Card className="auth-card mt-4" >
                <div
                  className="position-relative image-side "
                >
                  <p className="text-muted h5 mb-3 " style={{ marginTop: '-50px' }}>Login to the page to move further.</p>
                  <p className="text-muted " style={{ fontSize: '17px' }}>To Register, please go to the
                    <Link to="/register" style={{ fontWeight: "bold" }}>
                      {" "}REGISTRATION{" "}
                    </Link>
                    page.</p>
                </div>
                <div className="form-side " style={{ backgroundColor: 'lightgrey' }}>
                  <CardTitle className="mb-5 " style={{ fontSize: '35px', marginTop: '-20px', }}>
                    <IntlMessages id="user.login-title" />
                  </CardTitle>
                  <CardBody style={{ padding: "0px" }}>
                    <FormGroup>
                      <Form>
                        <Input type="text" className=" p-3 mb-5" placeholder="Email" style={{ fontSize: '18px', borderRadius: '23px' }} />
                        <Input className=" p-3 mb-4" type="password" placeholder="Password" style={{ fontSize: '18px', borderRadius: '23px' }} />
                      </Form>
                    </FormGroup>
                  </CardBody>
                  <div style={{ display: "flex", marginTop: "6vh", justifyContent: "space-between" }}>
                      <Button
                      style={{ fontSize: '18px', borderRadius: '23px' }}
                      onClick={() => handleLogin()}
                      className="btn btn-primary btn-shadow btn-lg"
                    >
                      <IntlMessages id="user.login-button" />
                    </Button>
                    <p style={{ fontSize: '16px' }} >
                      <IntlMessages id="user.forgot-password-question" />
                    </p>
                  </div>
                </div>
              </Card>
            </Colxx>
          </Row>
        </div>
      </main>
    </>
  );
};

export default Login;
