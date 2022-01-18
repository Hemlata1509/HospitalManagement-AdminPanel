/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */

import React, { useState, useEffect } from 'react';
import { Col, Form, FormGroup, Label } from 'reactstrap';
import axios from 'axios';
import ChromePicker from 'react-color';
import { FormComponent, ModalComponent } from '../formComponent';
import SnackbarModule from '../snackbar';

const AddAlert = ({ isOpen, toggle, alertData, objectId }) => {
  const [bgcolor, setBgColor] = useState('#224822');
  const [bgColorPicker, setBgColorPicker] = useState(false);
  const [overlay, setOverlay] = useState('');
  const [id, setLetId] = useState('');
  const [title, setTitle] = useState('');
  const [foreColor, setForeColor] = useState('#ffffff');
  const [foreColorPicker, setForeColorPicker] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('')
  const [severity, setSeverity] = useState('')

  useEffect(() => {
    alertData.map(alert => {
      if (alert._id === objectId) {
        setBgColor(alert.alertBackgroundColor);
        setForeColor(alert.alertForegroundColor);
        setOverlay(alert.alertIsOverlay);
        setLetId(alert.ledId);
        setTitle(alert.alertTitle);
      }
      return alert;
    })
  }, [alertData, objectId])
  const save = async () => {
    const dataAlerts = await {
      alertBackgroundColor: bgcolor,
      alertForegroundColor: foreColor,
      alertIsOverlay: overlay,
      alertTitle: title,
      ledId: id
    }
    await axios(`${process.env.REACT_APP_API}alerts/${objectId}`, {
      method: 'PUT',
      data: dataAlerts,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setOpen(true)
        setMsg("Alert Edited Successfully!")
        setSeverity("success")
      })
      .catch(() => {
        setOpen(true)
        setMsg("Oops!! Something went wrong!!")
        setSeverity("error")
      })
    toggle(!isOpen)
  }

  const handleSnackbarClose = () => {
    setOpen(false);
    window.location.reload();
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
        onModalChange={() => {
          if (bgColorPicker === true) { setBgColorPicker(false) }
          if (foreColorPicker === true) { setForeColorPicker(false) }
        }}
        isOpen={isOpen}
        toggle={toggle}
        modalHeader="Edit Alert Information"
        modalBody={
          <Form className="px-3" style={{ fontSize: '18px', }}>


            <FormComponent
              label="Alert ID:" type="text" onChange={(e) => setLetId(e.target.value)}
              placeholder="Enter Id" value={id}
            />
           

            <FormComponent
              label="Title :" type="text" onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title" value={title}
            />
           

            <FormComponent
              label="Room Number :" type="text" placeholder="Enter Room Number"
            // onChange={(e) => setOverlay(e.target.value)}
            />
           

            <FormComponent
              label="Overlay :" type="text" placeholder="Enter Overlay"
              onChange={(e) => setOverlay(e.target.value)} value={overlay}
            />
           

            <FormGroup className="mb-3" row >
              <Label sm={3}>
                Background:
              </Label>
              <Col sm={1} className="">
                <icon
                  className="bi bi-square-fill"
                  type="color"
                  onClick={() => { setBgColorPicker(true) }}
                  style={{ color: `${bgcolor}` }}
                />
              </Col>
              <Label sm={3}> {bgcolor}</Label>
              {
                bgColorPicker &&
                <ChromePicker
                  color={bgcolor}
                  onChangeComplete={updatedColor => setBgColor(updatedColor.hex)}

                />
              }
            </FormGroup>

            <FormGroup className="" row >
              <Label sm={3}>ForeColor:</Label>
              <Col sm={1} className="">
                <icon
                  className="bi bi-square-fill"
                  onClick={() => { setForeColorPicker(true) }}
                  style={{ color: `${foreColor}` }}
                />
              </Col>
              <Label sm={3}> {foreColor}</Label>
              {
                foreColorPicker &&
                <ChromePicker
                  color={foreColor}
                  onChangeComplete={updatedColor => setForeColor(updatedColor.hex)}
                />
              }
            </FormGroup>


          </Form>
        }
        onSaveClick={() => save()}
        onCancelClick={() => cancel()}
      />

    </div>
  )
}

export default AddAlert;
