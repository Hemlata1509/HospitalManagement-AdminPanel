

const setCurrentPage = (page) => async (dispatch) => {
    await dispatch({ type: 'page/currentPage', payload: page })
}

export default setCurrentPage;