import { prisma } from '@/lib/prisma';
import BudgetCard from '../../budgets/_components/BudgetCard';
import AddExpense from '../_components/AddExpense';
import ExpenseTable from '../_components/ExpenseTable';
import DeleteButton from '../_components/DeleteButton';
import EditBudget from '../_components/EditBudget';

export default async function Expenses({ params }: { params: Promise<{ budgetId: string }> }) {
  const budgetId = (await params).budgetId;

  try {
    const budget = await prisma.budget.findUniqueOrThrow({
      where: {
        id: parseInt(budgetId),
      },
      include: {
        expenses: true,
      },
    });
    let totalAmountSpent = 0;
    budget.expenses.forEach((exp) => (totalAmountSpent += +exp.amount));

    return (
      <>
        <div className="absolute right-6 m-5 flex gap-3">
          <EditBudget id={budget.id} name={budget.name} amt={budget.amount} icon={budget.icon} />
          <DeleteButton budgetId={+budgetId} />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:grid-cols-3">
          {budget ? (
            <div className="h-[66%]">
              <BudgetCard
                name={budget.name}
                amount={budget.amount}
                icon={budget.icon}
                expenseCount={budget?.expenses.length}
                amountSpent={totalAmountSpent}
              />
            </div>
          ) : (
            <div className="h-[150px] w-3xl animate-pulse rounded-lg bg-slate-200"></div>
          )}
          <div className="col-span-2 ml-32 w-[50%]">
            <AddExpense budgetId={+budgetId} />
          </div>
        </div>
        <div className="px-10">
          <h2 className="text-primary p-2 text-4xl font-semibold">Latest Expenses</h2>
          <ExpenseTable expenses={budget.expenses} />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}
