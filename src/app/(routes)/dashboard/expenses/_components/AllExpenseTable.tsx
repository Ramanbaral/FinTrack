'use client';

import formatDate from '@/lib/formatDate';
import { useCurrencyStore } from '@/providers/currency-store-provider';

export default function AllExpenseTable({
  expenses,
}: {
  expenses: ({
    budget: {
      name: string;
    };
  } & {
    id: number;
    name: string;
    amount: string;
    createdAt: Date;
    updatedAt: Date;
    budgetId: number;
  })[];
}) {
  const { currencySymbol } = useCurrencyStore((state) => state);

  return (
    <>
      <div className="mx-10 mt-5 overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="sticky top-0 bg-white ltr:text-left rtl:text-right">
            <tr className="rounded-md bg-slate-200 font-bold *:text-gray-900">
              <th className="px-3 py-2 whitespace-nowrap">Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Amount</th>
              <th className="px-3 py-2 whitespace-nowrap">Date</th>
              <th className="px-3 py-2 whitespace-nowrap">Budget</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {expenses.map((expense) => {
              return (
                <tr className="*:text-gray-900 *:first:font-medium" key={expense.id}>
                  <td className="px-3 py-2 whitespace-nowrap">{expense.name}</td>
                  <td className="px-3 py-2 font-semibold whitespace-nowrap">
                    {currencySymbol} {expense.amount}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{formatDate(expense.createdAt)}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{expense.budget.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
