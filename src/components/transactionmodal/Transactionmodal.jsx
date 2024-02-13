import "./transactionmodal.css";
import { useTransaction } from "../../context/index";

export const Transactionmodal=()=>{
//transaction context
const {transactionDispatch} = useTransaction()
  //income adding
 const handleIncomeChange=(event)=>{
transactionDispatch({
  type:"INCOME",
  payload:event.target.value
})}
 //expense adding
//  const handleExpenseChange =(event)=>{
//   transactionDispatch({
//     type:"EXPENSE",
//     payload:event.target.value
//   })
//  }
    return(
        <div className="transaction-form">
  <form>
    <input type="text" placeholder="Description" class="description-input"/>
    <input type="number" onChange={handleIncomeChange} placeholder="Amount" class="amount-input"/>
    <select className="type-input">
      <option value="income" >Income</option>
      <option value="expense" >Expense</option>
    </select>
    <button type="submit" className="add-button"><h2>+</h2></button>
  </form>
</div>
    )
}