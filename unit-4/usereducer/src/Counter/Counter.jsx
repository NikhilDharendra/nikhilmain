import { useState, useReducer } from "react";
// 1.
import reducer from "./counterReducer";
import {
  incrementAction,
  decrementAction,
  resetAction,
  incrementByValue,
  decrementByValue
  // incrementActionByValue
} from "./counterAction";

// dispatch(action) --> reducer( state,action )  --> returns --> becomes your updated state

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    isAuth: true,
    todos: []
  });
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h1>Count : {state.count}</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      {/* temp() */}
      <button onClick={() => dispatch(incrementAction)}>INCREMENT</button>
      <button onClick={() => dispatch(decrementAction)}>DECREMENT</button>
      <button onClick={() => dispatch(resetAction)}>RESET</button>
      {/* incrementByValue(10)
        {
          type: "INCREMENT_COUNT_BY_VALUE",
          payload: 10
        }
      */}
      <button onClick={() => dispatch(incrementByValue(inputValue))}>
        INCREMENT BY VALUE
      </button>

      <button onClick={() => dispatch(decrementByValue(inputValue))}>
        DECREMENT BY VALUE
      </button>
    </>
  );
}

export default Counter;
// REDUCER - R
// ACTION - A
// DISPATCH - D

// Manager needs to give employees
// 1. existing data to work with
// 2. instructions
// 3. type of work and payload - actions

/*
    type of work and payload

    action { type: 'WAVE_HAND', payload : 'clockwise' }
    action { type: 'WAVE_HAND', payload : 'anti-clockwise' }
  */

/* 
    instructions
  */

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button onClick={handleIncrement}>INCREMENT</button>
//       <button onClick={handleDecrement}>DECREMENT</button>
//     </>
//   );
// }
