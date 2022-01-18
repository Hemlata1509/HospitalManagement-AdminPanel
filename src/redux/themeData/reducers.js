const initialState = {
    status: 'Loading',
    themeData: [],
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'themeData/themeDataTable':
            return {
                ...state,
                status: 'Loaded',
                themeData: action.payload,
                data : []
            }
        default:
            return state;
    }
}