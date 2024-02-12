import {Link} from "react-router-dom"
export const Navbar=()=>{
    return(
        <box className="navbar-container d-flex dir-row
        shadow justify-space padding-s justify-center">
            <h2 className="text-col text-l">Money Tracker</h2>
            <Link to="/login"><div className="text-bg-col text-m ">Login</div></Link>
            </box>
     
    )
}