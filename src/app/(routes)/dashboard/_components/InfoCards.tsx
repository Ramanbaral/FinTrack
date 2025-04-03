import { PiggyBank, ReceiptIndianRupee, Wallet2 } from 'lucide-react';

export default function InfoCard({
  budgetList,
}: {
  budgetList: ({
    expenses: {
      name: string;
      id: number;
      amount: string;
      createdAt: Date;
      updatedAt: Date;
      budgetId: number;
    }[];
  } & {
    name: string;
    id: number;
    amount: string;
    icon: string | null;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
  })[];
}) {
  let totalBudgetAmount = 0;
  let totalAmountSpent = 0;
  budgetList.forEach((budget) => {
    totalBudgetAmount += +budget.amount;
    budget.expenses.forEach((exp) => (totalAmountSpent += +exp.amount));
  });

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="my-4 flex items-center justify-between rounded-md border-2 bg-slate-200 p-8">
        <div>
          <h2 className="text-primary text-xl font-semibold">Total Budget</h2>
          <h2 className="text-[2rem] font-bold">₹ {totalBudgetAmount}</h2>
        </div>
        <div className="bg-primary rounded-full p-4">
          <PiggyBank size={32} color="white" />
        </div>
      </div>

      <div className="my-4 flex items-center justify-between rounded-md border-2 bg-slate-200 p-8">
        <div>
          <h2 className="text-primary text-xl font-semibold">Total Amount Spent</h2>
          <h2 className="text-[2rem] font-bold">₹ {totalAmountSpent}</h2>
        </div>
        <div className="bg-primary rounded-full p-4">
          <ReceiptIndianRupee size={32} color="white" />
        </div>
      </div>

      <div className="my-4 flex items-center justify-between rounded-md border-2 bg-slate-200 p-8">
        <div>
          <h2 className="text-primary text-xl font-semibold">No. of Budgets</h2>
          <h2 className="text-[2rem] font-bold">{budgetList.length}</h2>
        </div>
        <div className="bg-primary rounded-full p-4">
          <Wallet2 size={32} color="white" />
        </div>
      </div>
    </div>
  );
}
