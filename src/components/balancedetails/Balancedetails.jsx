import "./balancedetails.css";

export const Balancedetails = ({ list, type }) => {
  console.log("1" + list);
  return (
    <div className=" balancedetails-container d-flex dir-col ">
      <span className="text-center text-m bold">{type}</span>
      {list.map((item) => (
        <div className={`${item.type==="expense"?"expense-container d-flex dir-row justify-center justify-space round text-s" : "income-container d-flex dir-row justify-center justify-space round text-s" }  `}>
          <span>{item.description}</span>
          <span>{item.amount}</span>
        </div>
      ))}
    </div>
  );
};
