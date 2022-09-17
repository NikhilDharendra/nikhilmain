import "./styles.css";
import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);

  // setAmount(val)
  // setAmount( prev => prev+1 )

  const handleDeposit = (amt) => {
    setAmount((prev) => prev + amt); // 0 + 100 = 100
    setAmount((prev) => prev + amt); // 100 + 100 = 200;
    setAmount((prev) => prev + amt); // 200 + 100 = 300
    setAmount((prev) => prev + amt); // 300 + 100 = 400
  };

  const handleWithdraw = () => {
    setAmount(amount - 100);
  };

  return (
    <div className="App">
      <h1>Current Amount : {amount}</h1>
      <button onClick={() => handleDeposit(100)}>Deposit 100</button>
      <button onClick={handleWithdraw}>Withdraw 100</button>
    </div>
  );
}

// 1. 100
// 2. 200
// 3. 300
// 4. 400
// 5. others
