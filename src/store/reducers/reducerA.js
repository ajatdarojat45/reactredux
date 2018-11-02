const initialState = {
  a: 1,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_A":
      return {
        ...state,
        a: state.a + action.value,
        loading: false,
      }
      break;
    case "LOADING":
      return {
        ...state,
        loading: true,
      }
      break
  }
  return state;
};

export default reducer;
