
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */

import React, { useEffect, useState } from 'react';
import {
  Col,
  Form,
  FormGroup,
  Label,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import axios from 'axios';
import SnackbarModule from '../snackbar';
import { FormComponent, ModalComponent } from '../formComponent';

const EditCareteam = ({ isOpen, toggle, careteamid, CareteamData }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [suffix, setSuffix] = useState('');
  const [etitle, setEtitle] = useState('');
  const [phno, setPhno] = useState('');
  const [id, setId] = useState('');
  const [objectId, setObjectId] = useState('');
  const [role, setRole] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('')
  const [severity, setSeverity] = useState('')

  const handleSnackbarClose = () => {
    setOpen(false);
    window.location.reload();
  }

  const dropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  useEffect(() => {
    CareteamData.map(careteam => {
      if (careteam._id === careteamid) {
        setRole(careteam.employeeRole);
        setFirstname(careteam.employeeFirstName);
        setLastname(careteam.employeeLastName);
        setEtitle(careteam.employeeTitle)
        setSuffix(careteam.employeeSuffix);
        setId(careteam.employeeId);
        setPhno(careteam.employeePhoneNumber);
        setObjectId(careteam._id)
      }
      return careteam;
    })
  }, [CareteamData, careteamid])

  const save = async () => {
    const dataCareteam = await {
      employeeRole: role,
      employeeId: id,
      employeeTitle: etitle,
      employeeFirstName: firstname,
      employeeLastName: lastname,
      employeeSuffix: suffix,
      employeeImageUrl: null,
      employeePhoneNumber: phno
    }
    await axios(`${process.env.REACT_APP_API}care-teams/${objectId}`, {
      method: 'PUT',
      data: dataCareteam,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setOpen(true)
        setMsg("Careteam Edited Successfully!")
        setSeverity("success")
      })
      .catch(() => {
        setOpen(true)
        setMsg("Oops!! Something went wrong!!")
        setSeverity("error")
      })
    toggle(!isOpen)
    console.log("dataCareteam", dataCareteam);
  }

  const cancel = () => {
    toggle(!isOpen)
  }

  return (
    <div>
      <SnackbarModule
        open={open}
        message={msg}
        handleSnackbarClose={handleSnackbarClose}
        severity={severity}
      />

      <ModalComponent
        isOpen={isOpen}
        toggle={toggle}
        modalHeader="Edit Careteam Information"
        modalBody={
          <Form className="px-3" style={{ fontSize: '18px', }}>

            <FormComponent
              type="text" label="Careteam ID :" placeholder="Enter Careteam ID"
              onChange={(e) => setId(e.target.value)} value={id}
            />
           
            <FormComponent
              type="text" label="Careteam FirstName :" placeholder="Enter FirstName"
              onChange={(e) => setFirstname(e.target.value)} value={firstname}
            />
          
            <FormComponent
              type="text" label="Careteam LastName :" placeholder="Enter LastName"
              onChange={(e) => setLastname(e.target.value)} value={lastname}
            />
           
            <FormComponent value={suffix}
              type="text" label="Suffix :" placeholder="Enter Suffix"
              onChange={(e) => setSuffix(e.target.value)}
            />
          
            <FormComponent
              type="text" label="Title :" placeholder="Enter Title"
              onChange={(e) => setEtitle(e.target.value)} value={etitle}
            />

            <FormComponent
              type="text" label="Phone number :" placeholder="Enter Phone number"
              onChange={(e) => setPhno(e.target.value)} value={phno}
            />

            <FormGroup className="mb-5" row>
              <Label sm={2}>Role :</Label>
              <Col sm={9}>
                <ButtonDropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
                  <DropdownToggle className="p-2 px-4"
                    color="primary"
                    defaultValue={role}
                    style={{
                      borderRadius: '15px',
                      fontSize: '18px'
                    }} caret>
                    {role}{'    '}
                  </DropdownToggle>
                  <DropdownMenu style={{
                    borderRadius: '15px',
                    fontSize: '18px',
                    boxShadow: ' 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%)'
                  }}>
                    <DropdownItem value="Provider" onClick={(e) => setRole(e.target.value)}>
                      Provider
                    </DropdownItem>
                    <DropdownItem value="Nurse" onClick={(e) => setRole(e.target.value)}>
                      Nurse
                    </DropdownItem>
                    <DropdownItem value="Aide" onClick={(e) => setRole(e.target.value)}>
                      Aide
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown> </Col>
            </FormGroup>

            <FormComponent
              type="file" label="Upload Image :"
              onChange={(e) => setPhno(e.target.value)}
            />

          </Form>
        }
        onSaveClick={() => save()}
        onCancelClick={() => cancel()}
      />

    </div>
  );
}

export default EditCareteam;