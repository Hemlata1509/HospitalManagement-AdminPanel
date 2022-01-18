// import axios from "axios";

import ApiIntegration from "api";

const getAllMedicationData = () => async (dispatch) => {
    ApiIntegration(dispatch,
        {
            api: 'medications/',
            type: 'medication/medicationData'
        })
    // axios(`${process.env.REACT_APP_API}medications/`,{
    //     method:'GET',
    //     headers:{
    //         'Content-Type': 'application-json'
    //     }
    // })
    // .then((res) => {
    //     const {data} = res.data
    //     // console.log(data);
    //     dispatch({
    //         type: 'medication/medicationData',
    //         payload:data
    //     })
    // })
}

export default getAllMedicationData;