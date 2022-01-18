// import axios from "axios";

import ApiIntegration from "api";

const getAllThemeData = () => async ( dispatch )=> {
    ApiIntegration(dispatch,{
        api: 'themes',
        type: 'themeData/themeDataTable'
    })
    // axios(`${process.env.REACT_APP_API}themes`,{
    //     method:'GET',
    //     headers:{
    //         'Content-Type': 'application-json'
    //     }
    // })
    // .then((res) => {
    //     const {data} = res.data;
    //     // const result = data[0].theme
    //     dispatch({ 
    //         type: 'themeData/themeDataTable', 
    //         payload: data,
    //         // data
    //     })
    // })
}

export default getAllThemeData;