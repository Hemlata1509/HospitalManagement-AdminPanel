const initialState = {
    status: 'Loading',
    locationData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'location/locationData':
            return {
                ...state,
                status: 'Loaded',
                locationData: action.payload
            }
        default:
            return state;
    }
}