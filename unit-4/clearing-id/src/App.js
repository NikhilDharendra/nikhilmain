import "./styles.css";
import { useState } from "react";
import Timer from "./Components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {showTimer && <Timer />}
        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? "HIDE COUNTER" : "SHOW COUNTER"}
        </button>
      </header>
    </div>
  );
}

export default App;
