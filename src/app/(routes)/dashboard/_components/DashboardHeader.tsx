import { UserButton } from '@clerk/nextjs';

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b bg-gray-100 p-5 px-10 shadow-sm">
      <div>{/*search bar*/}</div>

      <div className="">
        <UserButton />
      </div>
    </div>
  );
}
