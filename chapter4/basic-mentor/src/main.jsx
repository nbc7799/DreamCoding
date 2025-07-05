import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppMentor from "./AppMentor";
import AppMentors from "./AppMentors";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppMentors />
  </StrictMode>
);
