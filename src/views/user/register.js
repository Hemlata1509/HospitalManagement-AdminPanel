import React, { useEffect } from 'react';
import { Row, Card, CardTitle, CardBody, FormGroup, Form, Input } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { adminRoot } from 'constants/defaultValues';

const style = { fontSize: '18px', borderRadius: '23px' }

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
                            <Card className="auth-card  mt-4">
                                <div
                                    className="position-relative image-side border-red-900"
                                //  style={{borderRight:`5px double grey`}}
                                >
                                    {/* <p className="text-default h2">MAGIC IS IN THE DETAILS</p> */}
                                    <p className="text-muted h5 mb-3" style={{ marginTop: '-40px' }}>Already Registered? </p>
                                    <p className="text-muted " style={{ fontSize: '17px' }}>Please go to the
                                        <Link to="/" style={{ fontWeight: "bold" }}>
                                            {" "}LOGIN{" "}
                                        </Link>
                                        page.
                                    </p>
                                </div>
                                <div
                                    className="form-side"
                                    style={{ backgroundColor: 'lightgrey' }}
                                >
                                    <CardTitle className="mb-5 " style={{ fontSize: '35px', marginTop: '-15px', }}>
                                        <IntlMessages id="user.register" />
                                    </CardTitle>
                                    <CardBody style={{ padding: "0px" }}>
                                        <FormGroup>
                                            <Form>
                                                {/* <Label className=" h5"><IntlMessages id="user.username" /></Label> */}
                                                <Input type="text" className="p-3 mb-5" style={style} placeholder="User Name" />
                                                {/* <Label className="h5" ><IntlMessages id="user.email" /></Label> */}
                                                <Input type="text" className="p-3 mb-5" style={style} placeholder="Email" />
                                                {/* <Label className="h5" ><IntlMessages id="user.password" /></Label> */}
                                                <Input type="password" className="p-3 mb-5" style={style} placeholder="Password" />
                                            </Form>
                                        </FormGroup>
                                    </CardBody>
                                    <NavLink
                                        style={{ fontSize: '17px', borderRadius: '23px', marginTop: "5vh", }}
                                        to={adminRoot}
                                        className="btn btn-primary btn-shadow btn-lg"
                                    >
                                        <IntlMessages id="user.register-button" />
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


                //                      <p className="mb-0 text-muted text-small mb-0">
                //     <IntlMessages id="pages.error-code" />
                //   </p>
                //   <p className="display-1 font-weight-bold mb-5">vc</p> 
