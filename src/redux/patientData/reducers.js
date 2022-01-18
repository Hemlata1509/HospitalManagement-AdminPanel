const initialState = {
    status: 'Loading',
    patientData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'patient/patientData':
            return {
                ...state,
                status: 'Loaded',
                patientData: action.payload,
            }
        default:
            return state;
    }
}