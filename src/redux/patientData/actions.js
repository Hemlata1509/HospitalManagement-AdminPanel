// import axios from "axios";

import ApiIntegration from "api";

const getAllPatientData = () => async (dispatch) => {
    ApiIntegration(dispatch,
        {
            api: 'patients/',
            type: 'patient/patientData'
        })
    // axios(`${process.env.REACT_APP_API}patients/`,{
    //     method:'GET',
    //     headers:{
    //         'Content-Type': 'application-json'
    //     }
    // })
    // .then((res) => {
    //     const {data} =res.data;
    //     dispatch({
    //         type: 'patient/patientData',
    //         payload: data
    //     })
    // })
}

export default getAllPatientData;