import "./transactionmodal.css";
import { useTransaction } from "../../context/index";

export const Transactionmodal=()=>{
//transaction context
const {formInputs,setFormInputs} = useTransaction()

const handleFormChange=(event)=>{
  setFormInputs({
    ...formInputs,
    [event.target.name]:event.target.value,
    
  })
}
console.log(formInputs)

    return(
        <div className="transaction-form">
  <form>
    <input type="text" placeholder="Description" className="description"
    onChange={handleFormChange}/>
    <input type="number" name="amount" placeholder="Amount" className="amount"
    onChange={handleFormChange}/>
    <div className="input-radios" >
    <div className="input-radio">
         <input type="radio" checked={formInputs.type==="expense"} value="expense" name="type" onChange={handleFormChange} />
        <label>Expense</label>
         </div>
         <div className="input-radio">
         <input type="radio" checked={formInputs.type==="income"} value="income" name="type" onChange={handleFormChange} />
        <label>Income</label>
         </div>
         
    </div>
    <button type="submit" className="add-button" ><h2>+</h2></button>
  </form>
</div>
    )
}