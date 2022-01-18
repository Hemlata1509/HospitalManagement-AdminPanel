const initialState = {
    status : "Loading",
    themeData : []
 }


export default (state = initialState, action) => {
    switch (action.type) {
        case 'Theme/ThemeLoaded': 
            return {
                ...state,
                    status:'Loaded',
                    themeData:action.payload
            }
        default:
            return state;
    }
}   