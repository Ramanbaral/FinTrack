"use server";
import { prisma } from "@/lib/prisma";

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
    console.log(err);
    return 1;
  }
}
