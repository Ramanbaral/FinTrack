'use client';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

export default function Hero() {
  const { isSignedIn } = useUser();
  return (
    <div className="bg-radial-(circle, rgba(238,174,202,1)0%,rgba(148,187,233,1) 100%) flex h-[90vh] flex-col items-center justify-center gap-3">
      {/* hero main text  */}
      <p
        className="animate-pulse text-5xl font-bold delay-50 md:text-7xl lg:text-9xl"
        style={{ animationIterationCount: 1 }}
      >
        Manage Your Expense
      </p>
      <p
        className="animate-pulse text-5xl font-bold delay-50 md:text-7xl lg:text-9xl"
        style={{ animationIterationCount: 1 }}
      >
        Track Your Money
      </p>

      {/* hero sub text  */}
      <p className="text-1xl">Start creating your budget and save money</p>

      <Button size="lg" className="text-md my-[2rem] cursor-pointer bg-blue-600 hover:bg-blue-500">
        {isSignedIn ? (
          <Link href={'/dashboard'} className="flex items-center gap-2">
            <span>Dashboard</span> <LogIn />
          </Link>
        ) : (
          <Link href={'/sign-up'}>Create New Account</Link>
        )}
      </Button>
    </div>
  );
}
