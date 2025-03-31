"use server"
import { prisma } from "@/lib/prisma";

export async function createNewBudget(
  formData: FormData,
  { emoji, emailAddress }: { emoji: string; emailAddress: string | undefined }
) {
  try {
    await prisma.budgets.create({
      data: {
        name: formData.get("budgetname") as string,
        amount: formData.get("amount") as string,
        icon: emoji,
        createdBy: emailAddress as string,
      },
    });

    return 0;
  } catch(err) {
    console.log(err);
    return 1;
  }
}
