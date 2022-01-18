const initialState = {
    status: 'Loading',
    layoutData: [],
    defaultLayoutData:[],
    allLayoutlist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'layout/layoutLoaded':
            return {
                ...state,
                status: 'Loaded',
                layoutData: action.payload,
                defaultLayoutData: action.data,
                allLayoutlist: action.allLayoutlist
            }
        default:
            return state;
    }
}