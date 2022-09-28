import { ReactNode } from "react";

import { Header } from "@/shared/ui/header/header";
import { Suspensy } from "@/shared/ui/suspensy";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <Suspensy>{children}</Suspensy>
    </div>
  );
};
