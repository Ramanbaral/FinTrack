'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex h-[10vh] items-center justify-between px-7 shadow-sm">
      <div className="flex items-center gap-2">
        <Image src={'/logo.png'} alt="LOGO" width={100} height={100} />
        <p className="text-[1.7rem] font-extrabold text-blue-500">FinTrack</p>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={'/sign-in'}>
          <Button className="cursor-pointer bg-blue-600 hover:bg-blue-500">Get Started</Button>
        </Link>
      )}
    </div>
  );
}
