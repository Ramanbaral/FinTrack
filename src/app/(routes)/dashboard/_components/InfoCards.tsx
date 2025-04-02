import { PiggyBank, ReceiptIndianRupee, Wallet2 } from "lucide-react";

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
})[]
}) {
  let totalBudgetAmount = 0;
  let totalAmountSpent = 0;
  budgetList.forEach((budget) => {
    totalBudgetAmount += +budget.amount;
    budget.expenses.forEach((exp) => totalAmountSpent += +exp.amount)
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-8 my-4 flex justify-between items-center border-2 rounded-md bg-slate-200">
        <div>
          <h2 className="font-semibold text-xl text-primary">Total Budget</h2>
          <h2 className="text-[2rem] font-bold">₹ {totalBudgetAmount}</h2>
        </div>
        <div className="bg-primary rounded-full p-4">
          <PiggyBank size={32} color="white" />
        </div>
      </div>

      <div className="p-8 my-4 flex justify-between items-center border-2 rounded-md bg-slate-200">
        <div>
          <h2 className="font-semibold text-xl text-primary">Total Amount Spent</h2>
          <h2 className="text-[2rem] font-bold">₹ {totalAmountSpent}</h2>
        </div>
        <div className="bg-primary rounded-full p-4">
          <ReceiptIndianRupee size={32} color="white" />
        </div>
      </div>

      <div className="p-8 my-4 flex justify-between items-center border-2 rounded-md bg-slate-200">
        <div>
          <h2 className="font-semibold text-xl text-primary">No. of Budgets</h2>
          <h2 className="text-[2rem] font-bold">{budgetList.length}</h2>
        </div>
        <div className="bg-primary rounded-full p-4">
          <Wallet2 size={32} color="white" />
        </div>
      </div>


    </div>
  );
}
