const initialState = {
  b: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_B":
      return {
        ...state,
        b: action.value + state.b
      }
      break;
  }
  return state;
};

export default reducer;
