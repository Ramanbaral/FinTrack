import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export default async function Expenses() {

  // const user = await currentUser();

  //get all the expenses with budget created by this user 

  

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
            {/* {expenses.map((expense) => {
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
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
