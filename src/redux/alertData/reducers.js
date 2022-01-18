const initialState = {
    status: 'Loading',
    alertData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'alerts/alertsData':
            return {
                ...state,
                status: 'Loaded',
                alertData: action.payload
            }
        default:
            return state;
    }
}