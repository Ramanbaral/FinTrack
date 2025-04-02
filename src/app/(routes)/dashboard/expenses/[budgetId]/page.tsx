import { prisma } from "@/lib/prisma";
import BudgetCard from "../../budgets/_components/BudgetCard";
import AddExpense from "../_components/AddExpense";

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
        <h2 className="font-semibold text-4xl text-primary text-center p-2">
          Expenses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-4">
          {budget ? (
            <BudgetCard
              name={budget.name}
              amount={budget.amount}
              icon={budget.icon}
              expenseCount={budget?.expenses.length}
              amountSpent={totalAmountSpent}
            />
          ) : (
            <div className="h-[150px] w-3xl bg-slate-200 rounded-lg animate-pulse"></div>
          )}
          <AddExpense budgetId={+budgetId}/>
        </div>

      </>
    );
  } catch (err) {
    console.log(err);
  }
}
