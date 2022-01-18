const initialState = {
    status: 'Loading',
    careteamData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'careteam/careteamData':
            return {
                ...state,
                status: 'Loaded',
                careteamData: action.payload
            }
        default:
            return state;
    }
}