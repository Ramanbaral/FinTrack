import { UserButton } from "@clerk/nextjs";

export default function DashboardHeader() {
  return (
    <div className="p-5 px-10 shadow-sm border-b flex justify-between items-center bg-gray-100">
      <div>{/*search bar*/}</div>

      <div className="">
        <UserButton />
      </div>
    </div>
  );
}
