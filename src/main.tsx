import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Application } from "@/app";
import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <Application />
    </ChakraProvider>
  </StrictMode>
);
