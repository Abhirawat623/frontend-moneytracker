import "./balancebox.css";

import { useTransaction } from "../../context/index";
import { useEffect } from "react";
export const Balancebox = () => {
  //transaction context
  //values
  const {
    transactions,
    setTransactions,
    totalExpenses,
    totalIncome,
    setTotalExpenses,
    setTotalIncome,
  } = useTransaction();
  //for total income and expenses

  useEffect(() => {
    let income = 0;
    let expense = 0;

    transactions.forEach((money) => {
      money.type === "income"
        ? (income = income + parseFloat(money.amount))
        : (expense = expense + parseFloat(money.amount));
    });
    setTotalIncome(income);
    setTotalExpenses(expense);
    
  }, [transactions , setTotalExpenses, setTotalIncome]);

  console.log(transactions);

  const handleClearAll=()=>{
    setTransactions([])
  }

  return (
    <div
      className="balance-container d-flex dir-col gap-m padding-s
             justify-center"
    >
      <div className="d-flex dir-col gap-s justify-center ">
        <div className="d-flex dir-col ">
          <span className="text-s expence-buttons "> Balance</span>
          <span className="text-m bold text-center">Rs. {totalIncome-totalExpenses}</span>
        </div>
        <div className="d-flex dir-col ">
          <span className="text-s expence-buttons"> Total Income</span>
          <span className="text-m bold text-center"> Rs. {totalIncome}</span>
        </div>
        <div className="d-flex dir-col">
          <span className="text-s expence-buttons"> Total Expense</span>
          <span className="text-m bold text-center"> Rs. {totalExpenses}</span>
        </div>
      </div>
      <button className="clear-btn" onClick={handleClearAll}>Clear All</button>
    </div>
  );
};
