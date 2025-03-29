'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center px-7 shadow-sm h-[10vh]">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="LOGO" width={100} height={100} />
        <p className="font-extrabold text-[1.7rem] text-blue-500">FinTrack</p>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={'/sign-in'}>
          <Button className="bg-blue-600 hover:bg-blue-500 cursor-pointer">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}
