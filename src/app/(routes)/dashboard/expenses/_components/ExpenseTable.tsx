'use client';
import { Trash2 } from 'lucide-react';
import { deleteExpense } from '../../actions/actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

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
  // const [expenseList, setExpenseList] = useState(expenses);
  const router = useRouter();

  return (
    <>
      <div className="max-h-80 overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="sticky top-0 bg-white ltr:text-left rtl:text-right">
            <tr className="rounded-md bg-slate-200 font-bold *:text-gray-900">
              <th className="px-3 py-2 whitespace-nowrap">Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Amount</th>
              <th className="px-3 py-2 whitespace-nowrap">Date</th>
              <th className="px-3 py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {expenses.map((expense) => {
              return (
                <tr className="*:text-gray-900 *:first:font-medium" key={expense.id}>
                  <td className="px-3 py-2 whitespace-nowrap">{expense.name}</td>
                  <td className="px-3 py-2 whitespace-nowrap">₹ {expense.amount}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {expense.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <Trash2
                      className="cursor-pointer text-red-500"
                      onClick={async () => {
                        const st = await deleteExpense(expense.id);
                        if (st == 0) {
                          toast.success('Expense Deleted.');
                          router.refresh();
                        } else {
                          toast.error('Problem Deleting Expense.');
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
