import axios from "axios";

export const transactionsHandle= async ()=>{
    try{
    const data = axios.post(
        "https://backend-moneytracker-6y3z.vercel.app/api/transactionsdata",
        {
            description:"",
            type:"",
            amount:0
        }
    )
    }
    catch(err){
        console.log(err);
    }


}