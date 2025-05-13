import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyHello from "./MyHello";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyHello myName="鈴木" />
  </StrictMode>
);
