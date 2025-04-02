"use client";
import { Trash2 } from "lucide-react";
import { deleteExpense } from "../../actions/actions";
import { useState } from "react";
import { toast } from "sonner";

export default function ExpenseTable({
  expenses,
}: {
  expenses: {
    name: string;
    id: number;
    amount: string;
    createdAt: Date;
    updatedAt: Date;
    budgetId: number;
  }[];
}) {
  const [expenseList, setExpenseList] = useState(expenses);

  return (
    <>
      <div className="max-h-80 overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="sticky top-0 bg-white ltr:text-left rtl:text-right">
            <tr className="*:text-gray-900 font-bold bg-slate-200 rounded-md">
              <th className="px-3 py-2 whitespace-nowrap">Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Amount</th>
              <th className="px-3 py-2 whitespace-nowrap">Date</th>
              <th className="px-3 py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {expenseList.map((expense) => {
              return (
                <tr
                  className="*:text-gray-900 *:first:font-medium"
                  key={expense.id}
                >
                  <td className="px-3 py-2 whitespace-nowrap">
                    {expense.name}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    ₹ {expense.amount}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {expense.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <Trash2
                      className="text-red-500 cursor-pointer"
                      onClick={async () => {
                        const st = await deleteExpense(expense.id);
                        if (st == 0) {
                          setExpenseList((prevState) => {
                            return prevState.filter((e) => e.id != expense.id);
                          });
                          toast.success("Expense Deleted.");
                        }
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
