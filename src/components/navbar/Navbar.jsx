import "./navbar.css";
import { useModal } from "../../context/index";
export const Navbar=()=>{
  //modal
  const {showModal}=useModal();
    const handleTransactionModal=()=>{
    showModal();
    }

    return(
        <div className="navbar-container d-flex dir-row items-center
        shadow justify-space padding-s justify-center">
            <h2 className="text-col text-l">Money Tracker</h2>
         <div className="text-bg-col text-s border padding-s 
        trans-box round pointer" onClick={handleTransactionModal}>Add Transaction</div>
            </div>
     
    )
}