import "./transactionmodal.css";
import { useTransaction,useModal } from "../../context/index";
export const Transactionmodal = () => {
  //transaction context
  const { formInputs, setFormInputs, handleAddTransaction } = useTransaction();
  //modal
  const {hideModal} =useModal();
  //changes in form
  const handleFormChange = (event) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };
  console.log(formInputs);
  //form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //adding single transaction to all
    handleAddTransaction(formInputs);
    hideModal();
  };

  return (
    <div className="transaction-form">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Description"
          name="description"
          className="description"
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="amount"
          min="0"
          placeholder="Amount"
          className="amount"
          onChange={handleFormChange}
        />
        <div className="input-radios">
          <div className="input-radio">
            <input
              type="radio"
              checked={formInputs.type === "expense"}
              value="expense"
              name="type"
              onChange={handleFormChange}
            />
            <label>Expense</label>
          </div>
          <div className="input-radio">
            <input
              type="radio"
              checked={formInputs.type === "income"}
              value="income"
              name="type"
              onChange={handleFormChange}
            />
            <label>Income</label>
          </div>
        </div>
        <button type="submit" className="add-button">
          <h2>+</h2>
        </button>
      </form>
    </div>
  );
};
