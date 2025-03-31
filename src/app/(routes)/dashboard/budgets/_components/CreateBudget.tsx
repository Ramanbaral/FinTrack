"use client";
import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { createNewBudget } from "../../actions/actions";
import { DialogClose } from "@radix-ui/react-dialog";

export default function CreateBudget() {
  const [emoji, setEmoji] = useState("😄");
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);
  const [budgetName, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");

  const { user } = useUser();
  const emailAddress = user?.primaryEmailAddress?.emailAddress;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-10 bg-slate-100 flex flex-col justify-center items-center gap-2 rounded-md border-2 border-dashed cursor-pointer hover:shadow-md">
          <div>
            <PlusIcon size={"50px"} />
          </div>
          <div className="text-[1.25rem] font-semibold">New Budget</div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Budget</DialogTitle>
        </DialogHeader>

        <form
          action={(formData) => {
            const st = createNewBudget(formData, { emoji, emailAddress });
            console.log(st);
          }}
        >
          <div className="my-5">
            <Button
              variant="outline"
              size={"lg"}
              className="text-lg"
              onClick={() => setOpenEmojiDialog(!openEmojiDialog)}
            >
              {emoji}
            </Button>
            <div className="absolute">
              <EmojiPicker
                open={openEmojiDialog}
                onEmojiClick={(e) => {
                  setEmoji(e.emoji);
                  setOpenEmojiDialog(false);
                }}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="budgetname">Budget Name</label>
              <Input
                className="my-1"
                name="budgetname"
                value={budgetName}
                placeholder="Home Decor"
                onChange={(e) => {
                  setBudgetName(e.target.value);
                }}
                autoComplete="off"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="amount">Amount</label>
              <Input
                className="my-1"
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
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="cursor-pointer"
                disabled={!(budgetName && amount)}
                onClick={() => {
                  setBudgetName('');
                  setAmount('');
                }}
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
