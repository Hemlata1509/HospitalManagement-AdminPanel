const initialState = {
    status: 'Loading',
    medicationData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'medication/medicationData':
            return {
                ...state,
                status: 'Loaded',
                medicationData: action.payload,
            }
            default:
                return state;
    }
}