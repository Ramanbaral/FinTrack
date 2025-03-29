import { UserButton } from "@clerk/nextjs";

export default function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center">
      <div>
        search bar
      </div>

      <div>
        <UserButton />
      </div>
    </div>
  )
}