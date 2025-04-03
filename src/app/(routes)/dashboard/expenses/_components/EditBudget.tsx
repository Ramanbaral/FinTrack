'use client';
import { useState } from 'react';
import { Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import EmojiPicker from 'emoji-picker-react';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@radix-ui/react-dialog';
import { updateBudget } from '../../actions/actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function EditBudget({
  id,
  name,
  amt,
  icon,
}: {
  id: number;
  name: string;
  amt: string;
  icon: string | null;
}) {
  const [emoji, setEmoji] = useState(icon);
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);
  const [budgetName, setBudgetName] = useState(name);
  const [amount, setAmount] = useState(amt);
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'lg'} className="cursor-pointer">
          <Edit2 /> EDIT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Edit Budget</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const st = await updateBudget(id, budgetName, amount, emoji);
            if (st == 0) {
              toast.success('Successfully Edited Budget');
              router.refresh();
            } else {
              toast.error('Problem Editing Budget');
            }
          }}
        >
          <div>
            <div className="my-1">
              <Button
                type="button"
                variant="outline"
                size={'lg'}
                className="text-lg"
                onClick={() => setOpenEmojiDialog(!openEmojiDialog)}
              >
                {emoji}
              </Button>
              <div className="absolute z-10">
                <EmojiPicker
                  open={openEmojiDialog}
                  onEmojiClick={(e) => {
                    setEmoji(e.emoji);
                    setOpenEmojiDialog(false);
                  }}
                />
              </div>
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

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="mt-5 cursor-pointer"
                  disabled={!(budgetName && amount)}
                  onSubmit={(e) => e.preventDefault()}
                >
                  Update Budget
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
