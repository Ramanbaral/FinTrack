import { currentUser } from '@clerk/nextjs/server';
import InfoCards from './_components/InfoCards';
import ChartDashboard from './_components/ChartDashboard';
import { prisma } from '@/lib/prisma';
import BudgetCard from './budgets/_components/BudgetCard';
import Link from 'next/link';

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
  const amountSpentList: number[] = [];
  budgets.forEach((budget) => {
    let amountSpent = 0;
    budget.expenses.forEach((exp) => (amountSpent += +exp.amount));
    amountSpentList.push(amountSpent);
  });

  return (
    <div className="p-5">
      <div className="mb-2">
        <h2 className="text-3xl font-semibold">
          Hi, {user?.fullName} {'  '} 👋
        </h2>
        <p className="text-sm text-gray-400">Here&apos;s what happenning with your money</p>
      </div>
      {budgets.length != 0 ? (
        <InfoCards budgetList={budgets} />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i, ind) => {
            return (
              <div
                className="my-4 w-full animate-pulse rounded-lg bg-slate-200 p-8"
                key={ind}
              ></div>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <ChartDashboard budgetList={budgets} amountSpentList={amountSpentList} />
        </div>
        <div className="no-scrollbar my-7 ml-4 h-[56.9vh] overflow-scroll">
          <h2 className="mb-2 text-xl font-bold">Latest Budgets</h2>
          {budgets.map((budget, ind) => {
            return (
              <div className="mb-2" key={budget.id}>
                <Link href={`/dashboard/expenses/${budget.id}`}>
                  <BudgetCard
                    name={budget.name}
                    amount={budget.amount}
                    icon={budget.icon}
                    amountSpent={amountSpentList[ind]}
                    expenseCount={budget.expenses.length}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
