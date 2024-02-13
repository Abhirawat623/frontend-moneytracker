import { useContext, createContext, useReducer } from "react";
import { transactionReducer } from "../reducer/transaction-reducer";
const initialValue = {
  income: "1",
  expense: "1",
};

const TransactionContext = createContext(initialValue);

const TransactionProvider = ({ children }) => {
  const [{ income, expense }, transactionDispatch] =
    useReducer(transactionReducer, initialValue);

  return (
    <TransactionContext.Provider
      value={{ income, expense, transactionDispatch }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => useContext(TransactionContext);

export { useTransaction, TransactionProvider };
