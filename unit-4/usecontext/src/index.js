import { createRoot } from "react-dom/client";
import AppContextProvider from "./Context/AppContextProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 2.B Provide
// wrap your App component inside Custom provider component

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
