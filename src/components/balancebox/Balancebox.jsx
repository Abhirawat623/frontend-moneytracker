import "./balancebox.css";
import { useTransaction } from "../../context";
export const Balancebox=()=>{
 //transaction context
 const {income} =useTransaction()


    return(
        <div className="balance-container d-flex dir-col gap-m padding-s
             justify-center">
           
            <div className="d-flex dir-col gap-s justify-center ">
            <div className="d-flex dir-col ">
              <span className="text-s expence-buttons "> Balance</span>
                <span className="text-m bold text-center"> Rs. 10000</span>
              </div>
              <div className="d-flex dir-col ">
              <span className="text-s expence-buttons"> Total Income</span>
                <span className="text-m bold text-center"> Rs. {income}</span>
              </div>
              <div className="d-flex dir-col">
              <span className="text-s expence-buttons"> Total Expense</span>
                <span className="text-m bold text-center"> Rs. </span>
              </div>
            </div>
           
        </div>
    )
}