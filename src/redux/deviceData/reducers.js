const initialState = {
    status: 'Loading',
    deviceData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'device/deviceData':
            return {
                ...state,
                status: 'Loaded',
                deviceData: action.payload
            }
        default:
            return state;
    }
}