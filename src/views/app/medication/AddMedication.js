import React, { useState } from 'react';
import { Form } from 'reactstrap';
import axios from 'axios';
import SnackbarModule from '../snackbar';
import { FormComponent, ModalComponent } from '../formComponent';

const AddMedication = ({ isOpen, toggle }) => {

    const [medicineName, setMedicineName] = useState('');
    const [precaution, setPrecautions] = useState('');
    const [ingredient, setIngredients] = useState('');
    const [note, setNote] = useState('');
    const [ingredientIn, setIngredientIn] = useState('');
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState()
    const [severity, setSeverity] = useState()

    const save = async () => {
        const dataMedication = await {
            name: medicineName,
            imageUrl: null,
            precautions: precaution,
            ingredients: ingredient,
            notes: note,
            ingredientsInactive: ingredientIn,
        }
        await axios(`${process.env.REACT_APP_API}medications/`, {
            method: 'POST',
            data: dataMedication,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Medication Added Successfully!")
                setSeverity('success')
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity('error')
            })
        toggle(!isOpen)
    }
    const cancel = () => {
        toggle(!isOpen)
    }
    const handleSnackbarClose = () => {
        setOpen(false)
        window.location.reload();
    }

    return (
        <div>
            <SnackbarModule
                open={open}
                severity={severity}
                message={msg}
                handleSnackbarClose={handleSnackbarClose}
            />

            <ModalComponent
                isOpen={isOpen}
                toggle={toggle}
                modalHeader="Add New Medication"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>

                        <FormComponent
                            label="Medication ID :" type="text" placeholder="Enter Medication ID"
                        // onChange={(e) => setMedicationID(e.target.value)}
                        />

                        <FormComponent
                            label="Medication Name :" type="text" placeholder="Enter Medication Name"
                            onChange={(e) => setMedicineName(e.target.value)}
                        />

                        <FormComponent
                            label="Notes  :" type="text" placeholder="Enter Notes "
                            onChange={(e) => setNote(e.target.value)}
                        />

                        <FormComponent
                            label="Expiry Date :" type="text" placeholder="Enter Expiry Date"
                            onChange={(e) => setIngredientIn(e.target.value)}
                        />

                        <FormComponent
                            label="Precautions :" type="text" placeholder="Enter Precautions"
                            onChange={(e) => setPrecautions(e.target.value)}
                        />

                        <FormComponent
                            label="Ingredients :" type="text" placeholder="Enter Ingredients"
                            onChange={(e) => setIngredients(e.target.value)}
                        />
                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />

        </div>
    )
}

export default AddMedication
