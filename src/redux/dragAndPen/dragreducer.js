
export default (state=0, action) => {
    switch (action.type) {
        case 'drag': 
            return action.payload
        default:
            return state;
    }
}   