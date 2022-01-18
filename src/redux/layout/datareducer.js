const initialState = {
    status: 'Loading',
    layoutData: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'datalayout/layoutLoaded':
            return {
                ...state,
                status: 'Loaded',
                layoutData: action.payload,
            }
        default:
            return state;
    }
}