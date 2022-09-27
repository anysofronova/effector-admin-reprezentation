import { ReactNode } from "react";

import { Header } from "@/shared/ui/header/header";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
