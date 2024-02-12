"./home.css"
import { Navbar,Balancebox,Balancechart} from "../../components/index"
export const Home=()=>{

    return(
        <div className="Home-container d-flex dir-col justify-center ">
            <Navbar/>
            <div className="home-middle d-flex dir-row justify-space padding-s">
            <Balancebox/>
            <Balancechart/>
            </div>

        </div>
    )
}