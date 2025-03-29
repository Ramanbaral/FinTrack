import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="h-screen flex flex-col items-start border shadow-sm p-4 bg-gray-100">
      <div className="flex items-center gap-1">
        <Image src={"/logo.png"} alt="LOGO" width={"100"} height={"100"} />
        <p className="font-extrabold text-[1.7rem] text-blue-500">FinTrack</p>
      </div>

      <div className="mt-10">
        {menuList.map((menuItem) => {
          return (
            <div
              key={menuItem.id}
              className="flex items-center gap-2 font-medium text-gray-500 p-5 cursor-pointer rounded-md hover:text-primary hover:font-semibold hover:bg-sidebar-primary-foreground"
            >
              {<menuItem.icon />}
              <span className="">{menuItem.name}</span>
            </div>
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
