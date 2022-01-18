const initialState = {
    status: 'Loading',
    infotilesData : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'infotiles/infotilesData':
            return {
                ...state,
                status: 'Loaded',
                infotilesData: action.payload
            }
        default:
            return state;
    }
}