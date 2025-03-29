"use client";
import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="h-screen flex flex-col items-start border shadow-sm p-4 bg-gray-100">
      <div className="flex items-center gap-1">
        <Image src={"/logo.png"} alt="LOGO" width={"100"} height={"100"} />
        <p className="font-extrabold text-[1.7rem] text-blue-500">FinTrack</p>
      </div>

      <div className="mt-10">
        {menuList.map((menuItem) => {
          return (
            <Link href={menuItem.path} key={menuItem.id}>
              <div
                className={`flex items-center gap-2 mb-2 font-medium text-gray-500 p-5 cursor-pointer rounded-md hover:text-primary hover:font-semibold hover:bg-sidebar-primary-foreground ${
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
