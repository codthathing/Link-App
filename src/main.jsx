import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavigateProvider from "./services/NavigateProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigateProvider>
      <App />
    </NavigateProvider>
  </StrictMode>,
);