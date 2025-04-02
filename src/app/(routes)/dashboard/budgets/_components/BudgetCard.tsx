export default function BudgetCard({
  name,
  amount,
  icon,
  amountSpent,
  expenseCount
}: {
  name: string;
  amount: string;
  icon: string | null;
  amountSpent: number;
  expenseCount: number;
}) {

  const amountSpentPercentage = amountSpent/parseInt(amount) * 100;

  return (
    <div className="p-5 bg-slate-100 cursor-pointer rounded-md border-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="text-4xl">
            {icon}
          </div>
          <div className="">
            <p className="text-2xl font-semibold m-0 p-0">{name}</p>
            <p className="text-gray-500 m-0 p-0">{expenseCount} Items</p>
          </div>
        </div>

        <div>
          <span className="text-[1.4rem] text-primary font-semibold">₹ {amount}</span>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-[1.15rem] flex justify-between items-center">
          <p className="text-red-400">₹ {amountSpent} Spent</p>
          <p className="text-green-400">₹ {parseInt(amount) - amountSpent} Remaining</p>
        </div>

        <div className="mt-2 w-full h-3 bg-green-400 rounded-full">
          <div className={`h-3 bg-red-400 rounded-l-lg rounded-r-sm`} style={{width: `${amountSpentPercentage}%`}}>
          </div>
        </div>
      </div>
    </div>
  );
}
