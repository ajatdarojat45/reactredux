
export const loading = () => {
  return {
    type: "LOADING"
  }
}

export const updateAAsync = (val) => {
  return { type: "UPDATE_A", value: val}
};

export const updateA = val => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(updateAAsync(val))
    }, 5000)
  }
}

export const updateB = (val) => {
  return { type: "UPDATE_B", value: val}
};
