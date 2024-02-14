"./home.css";
import {
  Navbar,
  Balancebox,
  Balancechart,
  Balancedetails,
  Transactionmodal,
} from "../../components/index";
import { useModal,useTransaction } from "../../context/index";
export const Home = () => {
  //modal
  const { modalBox, hideModal } = useModal();
  //closing the modal
  const handleHomeClick = () => {
    hideModal();
  };
//for transaction data
const {transactions} = useTransaction();

  return (
    <div className="Home-container d-flex dir-col justify-center ">
      <Navbar />
      <div
        onClick={handleHomeClick}
        className="home-middle d-flex dir-row justify-space padding-s"
      >
        <Balancebox />
        <Balancechart />
      </div>
      <div>
        <div className="d-flex dir-row gap-m justify-space padding-s">
          
            <Balancedetails list={transactions.filter((item)=>item.type==="income")} type={"income"}/>
         
         
            <Balancedetails list={transactions.filter((item)=>item.type==="expense")} type={"expense"}/>

          
        </div>

        
        {modalBox && <Transactionmodal />}
      </div>
    </div>
  );
};
