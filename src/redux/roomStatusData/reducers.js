const initialState = {
    status: 'Loading',
    roomStatusData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'roomStatus/roomStatusData':
            return {
                ...state,
                status: 'Loaded',
                roomStatusData: action.payload
            }
        default:
            return state;
    }
}