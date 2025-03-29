import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-[90vh] bg-radial-(circle, rgba(238,174,202,1)0%,rgba(148,187,233,1) 100%)">
      {/* hero main text  */}
      <p className="font-bold text-5xl md:text-7xl lg:text-9xl">
        Manage Your Expense
      </p>
      <p className="font-bold text-5xl md:text-7xl lg:text-9xl">
        Track Your Money
      </p>

      {/* hero sub text  */}
      <p className="text-1xl">Start creating your budget and save money</p>

      <Link href={"/sign-in"}>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-500 my-[2rem] cursor-pointer"
        >
          Get Started Now <LogIn />
        </Button>
      </Link>
    </div>
  );
}
