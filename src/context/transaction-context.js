import { useContext, createContext, useState } from "react";

const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  //for value
  const [value, setValue] = useState("expense");
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  //all transactions
  const [transactions, setTransactions] = useState([]);
  //for form data
  const [formInputs, setFormInputs] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  return (
    <TransactionContext.Provider
      value={{ formInputs,transactions,value,totalExpenses,totalIncome,
        setFormInputs,setTotalExpenses,setTotalIncome,setTransactions,setValue }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => useContext(TransactionContext);

export { useTransaction, TransactionProvider };
