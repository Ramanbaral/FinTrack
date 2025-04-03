'use client';
import { UserButton } from '@clerk/nextjs';
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutGrid,
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Budgets',
      icon: PiggyBank,
      path: '/dashboard/budgets',
    },
    {
      id: 3,
      name: 'Expenses',
      icon: ReceiptText,
      path: '/dashboard/expenses',
    },
    {
      id: 4,
      name: 'Upgrade',
      icon: ShieldCheck,
      path: '/dashboard/upgrade',
    },
  ];

  const path = usePathname();

  return (
    <div className="flex h-screen flex-col items-start border bg-gray-100 p-4 shadow-sm">
      <div className="flex items-center gap-1">
        <Image src={'/logo.png'} alt="LOGO" width={'100'} height={'100'} />
        <p className="text-[1.7rem] font-extrabold text-blue-500">FinTrack</p>
      </div>

      <div className="mt-10">
        {menuList.map((menuItem) => {
          return (
            <Link href={menuItem.path} key={menuItem.id}>
              <div
                className={`hover:text-primary hover:bg-sidebar-primary-foreground mb-2 flex cursor-pointer items-center gap-2 rounded-md p-5 font-medium text-gray-500 hover:font-semibold ${
                  menuItem.path === path &&
                  `text-primary bg-sidebar-primary-foreground font-semibold`
                }`}
              >
                {<menuItem.icon />}
                <span className="">{menuItem.name}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="fixed bottom-10 flex gap-2 p-5">
        <UserButton />
        Profile
      </div>
    </div>
  );
}
