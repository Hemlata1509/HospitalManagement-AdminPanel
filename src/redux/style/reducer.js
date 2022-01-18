const initialState = {
    status : "Loading",
    styleData : []
 }


export default (state = initialState, action) => {
    switch (action.type) {
        case 'style/styleLoaded': 
            return {
                ...state,
                    status:'Loaded',
                    styleData:action.payload
            }
        default:
            return state;
    }
}   