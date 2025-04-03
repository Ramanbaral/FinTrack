'use client';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { deleteBudget } from '../../actions/actions';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';

export default function DeleteButton({ budgetId }: { budgetId: number }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div>
          <Button size={'lg'} variant={'destructive'} className="cursor-pointer">
            <Trash2 /> DELETE
          </Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete budget and remove data from
            our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const st = await deleteBudget(budgetId);
              if (st == 0) {
                toast.success('Budget Removed');
                redirect('/dashboard/budgets');
              } else {
                toast.error('Problem Deleting Budget');
              }
            }}
          >
            <AlertDialogAction type="submit">Continue</AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
