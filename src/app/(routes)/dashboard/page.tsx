import { currentUser } from "@clerk/nextjs/server";
import InfoCards from "./_components/InfoCards";
import { prisma } from "@/lib/prisma";

export default async function Dashboard() {
  const user = await currentUser();

  const budgets = await prisma.budget.findMany({
    where: {
      createdBy: {
        equals: user?.primaryEmailAddress?.emailAddress,
      },
    },
    include: {
      expenses: true,
    },
  });

  return (
    <div className="p-5">
      <h2 className="font-semibold text-3xl">
        Hi, {user?.fullName} {"  "} 👋
      </h2>
      {budgets.length != 0 ? (
        <InfoCards budgetList={budgets} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i, ind) => {
            return (
              <div
                className="w-full bg-slate-200 animate-pulse rounded-lg p-8 my-4"
                key={ind}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}
