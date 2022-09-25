import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Application } from "@/app";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);
