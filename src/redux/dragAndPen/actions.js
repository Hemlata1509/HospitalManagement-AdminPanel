

export const setDragAction = (action) => async (dispatch) => {
    await dispatch({ type: 'drag', payload: action })
}


export const setPenAction = (action) => async (dispatch) => {
    await dispatch({ type: 'pen', payload: action })
}
