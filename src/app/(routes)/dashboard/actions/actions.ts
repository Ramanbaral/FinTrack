'use server';
import { prisma } from '@/lib/prisma';

export async function createNewBudget({
  budgetName,
  amount,
  emoji,
  emailAddress,
}: {
  budgetName: string;
  amount: string;
  emoji: string;
  emailAddress: string | undefined;
}) {
  try {
    await prisma.budget.create({
      data: {
        name: budgetName,
        amount: amount,
        icon: emoji,
        createdBy: emailAddress as string,
      },
    });

    return 0;
  } catch (err) {
    console.error(err);
    return 1;
  }
}

export async function deleteBudget(id: number) {
  try {
    await prisma.expense.deleteMany({
      where: {
        budgetId: id,
      },
    });

    await prisma.budget.delete({
      where: {
        id: id,
      },
    });
    return 0;
  } catch (err) {
    console.error(err);
    return 1;
  }
}

export async function updateBudget(
  id: number,
  newName: string,
  newAmount: string,
  newIcon: string | null,
) {
  try {
    await prisma.budget.update({
      where: {
        id: id,
      },
      data: {
        name: newName,
        amount: newAmount,
        icon: newIcon,
      },
    });
    return 0;
  } catch (err) {
    console.error(err);
    return 1;
  }
}

export async function createNewExpense({
  name,
  amount,
  budgetId,
}: {
  name: string;
  amount: string;
  budgetId: number;
}) {
  try {
    await prisma.expense.create({
      data: {
        name: name,
        amount: amount,
        budgetId: budgetId,
      },
    });

    return 0;
  } catch (err) {
    console.error(err);
    return 1;
  }
}

export async function deleteExpense(id: number) {
  try {
    await prisma.expense.delete({
      where: {
        id: id,
      },
    });
    return 0;
  } catch (err) {
    console.log(err);
    return 1;
  }
}
