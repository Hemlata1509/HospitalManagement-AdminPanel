
export default (state=0, action) => {
    switch (action.type) {
        case 'pen': 
            return action.payload
        default:
            return state;
    }
}   