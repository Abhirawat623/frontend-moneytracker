import axios from "axios";

export const transactionsHandle= async (formInputs)=>{
    try{
    const data = await axios.post(
        "https://backend-moneytracker-6y3z.vercel.app/api/transactions",
        
        formInputs
        
    );
      console.log(data);
    }
  
    catch(err){
        console.log(err);
    }


}