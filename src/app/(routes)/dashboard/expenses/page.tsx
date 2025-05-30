import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import AllExpenseTable from './_components/AllExpenseTable';
import Pagination from './_components/Pagination';

export default async function Expenses({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const user = await currentUser();
  const { page } = await searchParams;
  const rowsPerPage = 18;

  //get all the expenses with budget created by current user
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
    skip: (+page - 1) * rowsPerPage,
    take: rowsPerPage,
  });

  const totalResults = await prisma.expense.count({
    where: {
      budget: {
        createdBy: user?.primaryEmailAddress?.emailAddress,
      },
    },
  });

  return (
    <>
      <AllExpenseTable expenses={expenses} />
      <Pagination pageNumber={+page} totalPages={Math.ceil(totalResults / rowsPerPage)} />
    </>
  );
}
