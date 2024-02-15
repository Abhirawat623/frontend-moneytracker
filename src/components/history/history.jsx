import { useEffect, useState } from "react";
import "./history.css";
import Carousel from "@itseasy21/react-elastic-carousel";
import axios  from "axios";
export const History =()=>{

    const [history,setHistory]=useState([]);
useEffect(
    ()=>{
        (async ()=>{
            try{
                const {data} = await axios.get("https://backend-moneytracker-6y3z.vercel.app/api/transactionsdata");
                setHistory(data)
                console.log(data);
            }
            catch(err){
                console.log(err)
            }
        })()
    },[]
)

    return(
        <div className=" balancedetails-container d-flex dir-col " key={"_id"}>
      <span className="text-center text-m bold">History</span>
      <Carousel
        className="carousel"
        itemsToShow={6}
        verticalMode={true}
        itemsToScroll={5}
        pagination={false}
        autoPlaySpeed={2500}
      >

      {history.map((item) => (
        <div className="history-container d-flex dir-row justify-center justify-space round text-s" key="index">
          <span>{item.description}</span>
          <span>Rs. {item.amount}</span>
        </div>
      ))}</Carousel>
    </div>
    )

}