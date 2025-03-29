import { ReactNode } from "react";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <div className="fixed hidden md:w-64 md:block">
        <SideNav />
      </div>
      <div className="md:ml-64 bg-green-400">
      {children}
      </div>
    </div>
  );
}
