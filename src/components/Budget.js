import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const newBudgetValue = event.target.value;
    const maxBudgetValue = 20000;
    const totalExpenses = expenses.reduce(
      (total, item) => (total += item.cost),
      0
    );

    // Validate input
    if (isNaN(newBudgetValue)) {
      alert("Invalid input. Please enter a numerical value.");
      return;
    }

    if (newBudgetValue > maxBudgetValue) {
      alert(`Budget cannot exced ${currency}20000.`);
      return;
    }

    if (newBudgetValue < totalExpenses) {
      alert("Budget cannot be lower than spending.");
      return;
    }

    dispatch({ type: "SET_BUDGET", payload: newBudgetValue });
    setNewBudget(newBudgetValue);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget:{currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
