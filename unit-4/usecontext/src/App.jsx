import "./styles.css";
import { useContext } from "react";
import { AppContext } from "./Context/AppContextProvider";

const style = {
  light: {
    color: "black",
    background: "#cecece",
    padding: "50px"
  },
  dark: {
    color: "white",
    background: "black",
    padding: "50px"
  }
};

export default function App() {
  // 3. CONSUME
  // useContext hook from react will help us consume the data
  // data is consumed here;
  const { theme, toggleTheme } = useContext(AppContext);

  // console.log("value in app.js", value);

  return (
    <div className="App" style={theme === "dark" ? style.dark : style.light}>
      <h1>Theme is {theme}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        style={
          theme === "dark"
            ? {
                background: "white",
                color: "black",
                border: "none",
                padding: "5px"
              }
            : {
                background: "pink",
                color: "black",
                border: "none",
                padding: "5px"
              }
        }
        onClick={toggleTheme}
      >
        CHANGE THEME
      </button>
    </div>
  );
}
