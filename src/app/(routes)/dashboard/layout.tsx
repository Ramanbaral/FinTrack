import { ReactNode } from 'react';
import SideNav from './_components/SideNav';
import DashboardHeader from './_components/DashboardHeader';

export default async function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <div className="fixed hidden md:block md:w-64">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
