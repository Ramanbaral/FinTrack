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
        setAmount("");
        setName("");
      }}
    >
      <div className="p-2 bg-slate-100 flex flex-col justify-center items-center gap-2 rounded-md border-2">
        <p className="text-center text-primary text-xl font-semibold">
          Create New Expense
        </p>
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

        <Button
          type="submit"
          className="cursor-pointer mt-3 w-[10rem]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          disabled={!(name && amount)}
          size={"lg"}
        >
          Add Expense
        </Button>
      </div>
    </form>
  );
}
