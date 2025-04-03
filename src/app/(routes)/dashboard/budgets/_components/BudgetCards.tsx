import { prisma } from '@/lib/prisma';
import CreateBudget from './CreateBudget';
import BudgetCard from './BudgetCard';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function BudgetCards() {
  const user = await currentUser();

  const budgetList = await prisma.budget.findMany({
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
  budgetList.forEach(async (budget) => {
    let amountSpent = 0;
    budget.expenses.forEach((expense) => (amountSpent += parseInt(expense.amount)));
    amountSpentList.push(amountSpent);
  });

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateBudget />

        {budgetList.map((budget, ind) => {
          return (
            <Link href={`/dashboard/expenses/${budget.id}`} key={budget.id}>
              <BudgetCard
                name={budget.name}
                amount={budget.amount}
                icon={budget.icon}
                amountSpent={amountSpentList[ind]}
                expenseCount={budget.expenses.length}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
