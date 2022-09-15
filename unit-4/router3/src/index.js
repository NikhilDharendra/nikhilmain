import { createRoot } from "react-dom/client";
import AuthContextProvider from "./Context/AuthContext";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
