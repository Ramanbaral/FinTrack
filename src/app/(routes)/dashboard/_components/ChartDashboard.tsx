'use client';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

export default function ChartDashboard({
  budgetList,
  amountSpentList,
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
  amountSpentList: number[];
}) {
  const data: { name: string; totalAmount: string; amountSpent: number }[] = [];
  budgetList.forEach((budget, ind) => {
    data.push({
      name: budget.name,
      totalAmount: budget.amount,
      amountSpent: amountSpentList[ind],
    });
  });

  return (
    <div className="my-7 rounded-lg border p-5">
      <h2 className="text-center text-xl font-bold">Recent Activity</h2>
      <ResponsiveContainer width={'80%'} height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amountSpent" stackId="a" fill="#00b5ff" />
          <Bar dataKey="totalAmount" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
