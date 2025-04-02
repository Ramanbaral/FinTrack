import { prisma } from "@/lib/prisma";
import BudgetCard from "../../budgets/_components/BudgetCard";
import AddExpense from "../_components/AddExpense";
import ExpenseTable from "../_components/ExpenseTable";

export default async function Expenses({
  params,
}: {
  params: Promise<{ budgetId: string }>;
}) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 mt-5">
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
            <div className="h-[150px] w-3xl bg-slate-200 rounded-lg animate-pulse"></div>
          )}
          <div className="w-[50%] ml-32 col-span-2">
            <AddExpense budgetId={+budgetId} />
          </div>

        </div>
          <div className="px-10">
            <h2 className="font-semibold text-4xl text-primary p-2">Latest Expenses</h2>
            <ExpenseTable expenses={budget.expenses} />
          </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}
