export const incrementAction = { type: "INCREMENT_COUNT" };
export const decrementAction = { type: "DECREMENT_COUNT" };
export const resetAction = { type: "RESET_COUNT" };

// export const incrementActionByValue = {
//   type: "INCREMENT_COUNT_BY_VALUE",
//   payload: 5
// };

// action creator;
export const incrementByValue = (value) => {
  return {
    type: "INCREMENT_COUNT_BY_VALUE",
    payload: value
  };
};

export const decrementByValue = (value) => ({
  type: "DECREMENT_COUNT_BY_VALUE",
  payload: value
});

/* 
  {
    type: "INCREMENT_COUNT_BY_VALUE",
    payload: 12
  };
*/

// 1. reset - reducer
// 2. reset - action
// 3. reset - dispatch reset action on click event of button 'RESET'
