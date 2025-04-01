export default async function Expenses({
  params,
}: {
  params: Promise<{ budgetId: string }>;
}) {
  const budgetId = (await params).budgetId;
  return <div>Expenses {budgetId}</div>;
}
