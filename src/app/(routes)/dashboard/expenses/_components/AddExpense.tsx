"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createNewExpense } from "../../actions/actions";
import { toast } from "sonner";

export default function AddExpense({ budgetId }: { budgetId: number }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <form
      action={async () => {
        const st = await createNewExpense({ name, amount, budgetId });
        if (st == 0) {
          toast.success("New Expense Added");
        } else {
          toast.error("Problem Creating New Expense");
        }
      }}
    >
      <div className="p-2 bg-slate-100 flex flex-col justify-center items-center gap-2 rounded-md border-2">
        <div className="mt-1">
          <Label htmlFor="budgetname" className="text-1xl">
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
          <Label htmlFor="amount">Amount</Label>
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

        <Button
          type="submit"
          className="cursor-pointer mt-3"
          onSubmit={(e) => {e.preventDefault();
            setName("");
            setAmount("");
          }}
          disabled={!(name && amount)}
        >
          Add Expense
        </Button>
      </div>
    </form>
  );
}
