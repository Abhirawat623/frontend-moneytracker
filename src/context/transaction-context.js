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
  //for adding one transaction details
  const handleAddTransaction = (currentforminput) => {
    if (currentforminput.description && currentforminput.amount) {
      setTransactions([
        ...transactions,
        { ...currentforminput, id: Date.now() },
      ]);
    }
  };
  console.log("hi" + { transactions });



  return (
    <TransactionContext.Provider
      value={{
        formInputs,
        transactions,
        value,
        totalExpenses,
        totalIncome,
        setFormInputs,
        setTotalExpenses,
        setTotalIncome,
        setTransactions,
        setValue,
        handleAddTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => useContext(TransactionContext);

export { useTransaction, TransactionProvider };
