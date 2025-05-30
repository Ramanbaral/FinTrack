import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import formatDate from '@/lib/formatDate';
import AllExpenseTable from './_components/AllExpenseTable';

export default async function Expenses() {
  const user = await currentUser();

  //get all the expenses with budget created by this user
  const expenses = await prisma.expense.findMany({
    where: {
      budget: {
        createdBy: user?.primaryEmailAddress?.emailAddress,
      },
    },
    include: {
      budget: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <AllExpenseTable expenses={expenses} />
  );
}
