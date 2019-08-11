export const INCREMENT = "INCREMENT";

// Action Creator
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const asyncIncrement = () => {
  return dispatch => {
    // Async Code
    setTimeout(() => {
        
      dispatch(increment());
    }, 3000);
  };
};
