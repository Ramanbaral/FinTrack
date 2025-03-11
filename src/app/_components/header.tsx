import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-7 shadow-sm h-[10vh]">
      <div className="flex items-center gap-2">
        <Image  src={'/logo.png'} alt="LOGO" width={100} height={100} />
        <p className="font-bold text-[1.6rem]">FinTrack</p>
      </div>
      <Button className="bg-blue-600 hover:bg-blue-500 cursor-pointer">Get Started</Button>
    </div>
  )
}