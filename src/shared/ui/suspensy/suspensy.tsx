import { Spinner } from "@chakra-ui/react";
import { FC, PropsWithChildren, Suspense } from "react";

export const Suspensy: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Spinner
          size={"md"}
          thickness="4px"
          emptyColor="gray.200"
          color="gray.500"
        />
      }
    >
      {children}
    </Suspense>
  );
};
