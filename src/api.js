import axios from 'axios'

const ApiIntegration = (dispatch, obj) => {
    axios(`${process.env.REACT_APP_API}${obj.api}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application-json'
        }
    }).then((res) => {
        const {data} = res.data;
        dispatch({
            type: `${obj.type}`,
            payload: data
        })
    })
}

export default ApiIntegration;
