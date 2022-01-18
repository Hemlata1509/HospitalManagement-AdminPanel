import ApiIntegration from "api";
// import axios from "axios";

const getAllLocationData = () => async (dispatch) => {
    ApiIntegration(dispatch,
        {
            api: 'locations/',
            type: 'location/locationData'
        })
    // axios(`${process.env.REACT_APP_API}locations/`,{
    //     method:'GET',
    //     headers:{
    //         'Content-Type': 'application-json'
    //     }
    // })
    // .then((res) => {
    //     const {data} = res.data;
    //     dispatch({
    //         type: 'location/locationData',
    //         payload: data
    //     })
    // })
}

export default getAllLocationData;
