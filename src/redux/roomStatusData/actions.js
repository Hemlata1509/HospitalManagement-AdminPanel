// import axios from "axios";

import ApiIntegration from "api";

const getAllRoomStatusData = () => async(dispatch) => {
    ApiIntegration(dispatch,{
        api: 'room-status/',
        type: 'roomStatus/roomStatusData'
    })
    // axios(`${process.env.REACT_APP_API}room-status/`,{
    //     method:'GET',
    //     headers:{
    //         'Content-Type': 'application-json'
    //     }
    // })
    // .then((res) => {
    //     const {data} = res.data;
    //     dispatch({
    //         type: 'roomStatus/roomStatusData',
    //         payload: data
    //     })
    // })
}

export default getAllRoomStatusData;