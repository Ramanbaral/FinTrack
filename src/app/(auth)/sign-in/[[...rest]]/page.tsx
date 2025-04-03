import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function signin() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="img"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <Image src={"/logo.png"} alt="LOGO" width={100} height={100} />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to FinTrack
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              FinTrack is a smart and intuitive expense tracker designed to help
              you manage your finances effortlessly. With real-time insights,
              budget tracking, and expense categorization, it keeps you in
              control of your spending. Stay on top of your financial goals and
              make informed decisions with FinTrack.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to FinTrack
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                FinTrack is a smart and intuitive expense tracker designed to
                help you manage your finances effortlessly. With real-time
                insights, budget tracking, and expense categorization, it keeps
                you in control of your spending. Stay on top of your financial
                goals and make informed decisions with FinTrack.
              </p>
            </div>

            <SignIn withSignUp={true} />
          </div>
        </main>
      </div>
    </section>
  );
}
