/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect } from 'react';
import { Form } from 'reactstrap';
import axios from 'axios';
import { FormComponent, ModalComponent } from '../formComponent';
import SnackbarModule from '../snackbar';

const EditMedication = ({ isOpen, toggle, medicationData, objectId }) => {

    const [medicineName, setMedicineName] = useState('');
    const [precaution, setPrecautions] = useState('');
    const [ingredient, setIngredients] = useState('');
    const [note, setNote] = useState('');
    const [ingredientIn, setIngredientIn] = useState('');
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState()
    const [severity, setSeverity] = useState()

    useEffect(() => {
        medicationData.map(medication => {
            if (medication._id === objectId) {
                setMedicineName(medication.name);
                setPrecautions(medication.precautions);
                setIngredients(medication.ingredients);
                setNote(medication.notes);
                setIngredientIn(medication.ingredientsInactive);
            }
            return medication;
        })
    }, [medicationData, objectId])

    const save = async () => {
        const dataMedication = await {
            name: medicineName,
            imageUrl: null,
            precautions: precaution,
            ingredients: ingredient,
            notes: note,
            ingredientsInactive: ingredientIn,
        }

        await axios(`${process.env.REACT_APP_API}medications/${objectId}`, {
            method: 'PUT',
            data: dataMedication,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setOpen(true)
                setMsg("Medication Edited Successfully!")
                setSeverity('success')
            })
            .catch(() => {
                setOpen(true)
                setMsg("Oops!! Something went wrong!!")
                setSeverity('error')
            })
        toggle(!isOpen)
    }

    const handleSnackbarClose = () => {
        setOpen(false)
        window.location.reload();
    }

    const cancel = () => {
        toggle(!isOpen)
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
                modalHeader="Edit Medication Information"
                modalBody={
                    <Form className="px-3" style={{ fontSize: '18px', }}>
                        <FormComponent
                            label="Medication ID :" type="text" placeholder="Enter Medication ID"
                        // onChange={(e) => setMedicationID(e.target.value)}
                        />

                        <FormComponent
                            label="Medication Name :" type="text" placeholder="Enter Medication Name"
                            onChange={(e) => setMedicineName(e.target.value)} value={medicineName}
                        />

                        <FormComponent
                            label="Notes  :" type="text" placeholder="Enter Notes "
                            onChange={(e) => setNote(e.target.value)} value={note}
                        />

                        <FormComponent
                            label="Expiry Date :" type="text" placeholder="Enter Expiry Date"
                            onChange={(e) => setIngredientIn(e.target.value)} value={ingredientIn}
                        />

                        <FormComponent
                            label="Precautions :" type="text" placeholder="Enter Precautions"
                            onChange={(e) => setPrecautions(e.target.value)} value={precaution}
                        />

                        <FormComponent
                            label="Ingredients :" type="text" placeholder="Enter Ingredients"
                            onChange={(e) => setIngredients(e.target.value)} value={ingredient}
                        />
                    </Form>
                }
                onSaveClick={() => save()}
                onCancelClick={() => cancel()}
            />
        </div >
    )
}

export default EditMedication
