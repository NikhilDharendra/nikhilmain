// SET OF INSTRUCTIONS YOU'LL PASS IN HERE
// if (action.type === "INCREMENT_COUNT") {
//   return state + 1;
// }
// if (action.type === "DECREMENT_COUNT") {
//   return state - 1;
// }
// if (action.type === "RESET_COUNT") {
//   return 0;
// }
// return state;

// data/information associated with the action

// INCREMENT_COUNT_BY_VALUE

// { type : 'INCREMENT_COUNT_BY_VALUE', payload : 10 }

// R - REDUCER
// A -
// D

/* 
{ count: 0, isAuth: true, todos : [] }
*/

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      // state.count + 1
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET_COUNT":
      return {
        ...state,
        count: 0
      };
    case "INCREMENT_COUNT_BY_VALUE":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "DECREMENT_COUNT_BY_VALUE":
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
}

export default reducer;
