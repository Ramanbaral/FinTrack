export default function BudgetCard({
  name,
  amount,
  icon,
  amountSpent,
  expenseCount,
}: {
  name: string;
  amount: string;
  icon: string | null;
  amountSpent: number;
  expenseCount: number;
}) {
  const amountSpentPercentage = (amountSpent / parseInt(amount)) * 100;

  return (
    <div className="cursor-pointer rounded-md border-2 bg-slate-100 p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <div className="text-4xl">{icon}</div>
          <div className="">
            <p className="m-0 p-0 text-2xl font-semibold">{name}</p>
            <p className="m-0 p-0 text-gray-500">{expenseCount} Items</p>
          </div>
        </div>

        <div>
          <span className="text-primary text-[1.4rem] font-semibold">₹ {amount}</span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-[1.15rem]">
          <p className="text-red-400">₹ {amountSpent} Spent</p>
          <p className="text-green-400">₹ {parseInt(amount) - amountSpent} Remaining</p>
        </div>

        <div className="mt-2 h-3 w-full rounded-full bg-green-400">
          <div
            className={`h-3 rounded-l-lg rounded-r-sm bg-red-400`}
            style={{ width: `${amountSpentPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
