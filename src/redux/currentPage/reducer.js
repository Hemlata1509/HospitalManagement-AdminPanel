
export default (state=0, action) => {
    switch (action.type) {
        case 'page/currentPage': 
            return action.payload
        default:
            return state;
    }
}   