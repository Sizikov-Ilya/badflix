import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import "bear-react-carousel/dist/index.css";
import ToggleColorMode from "./context/ToggleColorMode.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <ToggleColorMode>
        <CssBaseline />
        <App />
      </ToggleColorMode>
    </StrictMode>
  </Provider>
);
