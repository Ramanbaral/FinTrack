import CreateBudget from "./CreateBudget"

export default function BudgetCards() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateBudget />
      </div>
      {/* Budget Cards */}
    </div>
  )
}