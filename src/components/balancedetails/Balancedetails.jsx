import "./balancedetails.css";
import Carousel from "@itseasy21/react-elastic-carousel";
export const Balancedetails = ({ list, type }) => {
  console.log("1" + list);
  return (
    <div className=" balancedetails-container d-flex dir-col " key={"id"}>
      <span className="text-center text-m bold">{type}</span>
      <Carousel
        className="carousel"
        itemsToShow={6}
        verticalMode={true}
        itemsToScroll={5}
        pagination={false}
        autoPlaySpeed={2500}
      >
      {list.map((item) => (
        <div className={`${item.type==="expense"?"expense-container d-flex dir-row justify-center justify-space round text-s" : "income-container d-flex dir-row justify-center justify-space round text-s" }  `}>
          <span>{item.description}</span>
          <span>Rs. {item.amount}</span>
        </div>
      ))}</Carousel>
    </div>
  );
};
