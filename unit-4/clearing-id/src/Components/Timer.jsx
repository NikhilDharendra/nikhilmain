import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
// useEffect needs a cleanup function when it unmounts that is what we are doing using clearinterval as a return statement
  useEffect(() => {
    const intervalId = setTimeout(() => {
      console.log(`callback invoked, time is ${Date.now()}`);
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    const cleanup = () => {
      clearTimeout(intervalId);
    };

    return cleanup;
  }, []);
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <h3>Countdown Timer : {count}</h3>
    </div>
  );
}

export default Timer;
