import "./transactionmodal.css";

export const Transactionmodal=()=>{
    return(
        <div className="transaction-form">
  <form>
    <input type="text" placeholder="Description" class="description-input"/>
    <input type="number" placeholder="Amount" class="amount-input"/>
    <select className="type-input">
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
    <button type="submit" className="add-button">Add</button>
  </form>
</div>
    )
}