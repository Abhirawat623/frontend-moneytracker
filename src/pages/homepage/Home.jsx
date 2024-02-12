"./home.css"
import { Navbar,Balancebox,Balancechart,Balancedetails,Transactionmodal} from "../../components/index"
import { useModal } from "../../context/index"
export const Home=()=>{
//modal
const {modal} =useModal();
    return(
        <div className="Home-container d-flex dir-col justify-center ">
            <Navbar/>
            <div className="home-middle d-flex dir-row justify-space padding-s">
            <Balancebox/>
            <Balancechart/>
            </div>
            <div>
            <Balancedetails/>
            {modal &&<Transactionmodal/>}
            </div>
        </div>
    )
}