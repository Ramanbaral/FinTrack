'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createNewExpense } from '../../actions/actions';
import { toast } from 'sonner';
import AddExpenseButton from './AddExpenseButton';
import { useRouter } from 'next/navigation';

export default function AddExpense({ budgetId }: { budgetId: number }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();

  return (
    <form
      action={async () => {
        const st = await createNewExpense({ name, amount, budgetId });
        if (st == 0) {
          toast.success('New Expense Added');
          router.refresh();
        } else {
          toast.error('Problem Creating New Expense');
        }
        setAmount('');
        setName('');
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 rounded-md border-2 bg-slate-100 p-2">
        <p className="text-primary text-center text-xl font-semibold">Create New Expense</p>
        <div className="mt-1">
          <Label htmlFor="budgetname" className="text-[1rem]">
            Expense Name
          </Label>
          <Input
            className="my-1 w-[20rem]"
            name="budgetname"
            value={name}
            placeholder="Bedroom Decor"
            onChange={(e) => {
              setName(e.target.value);
            }}
            autoComplete="off"
          />
        </div>

        <div className="mt-1">
          <Label htmlFor="amount" className="text-[1rem]">
            Amount
          </Label>
          <Input
            className="my-1 w-[20rem]"
            name="amount"
            type="number"
            value={amount}
            placeholder="100.00"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            autoComplete="off"
          />
        </div>

        <AddExpenseButton name={name} amount={amount} />
      </div>
    </form>
  );
}
