import "./balancedetails.css";

export const Balancedetails = () => {
  return (
    
        <div className="d-flex dir-row gap-m justify-space padding-s">
      <div className=" balancedetails-container d-flex dir-col ">
        <span className="text-center text-m bold">Income</span>
        <div className="d-flex dir-row justify-center justify-space income-container round text-s">
          <span>Salary</span>
          <span>Rs. 100000</span>
        </div>
      </div>
      <div className="balancedetails-container d-flex dir-col ">
        <span className="text-center text-m bold">Expenses</span>
        <div className="d-flex dir-row justify-center justify-space expense-container round text-s">
          <span >Party</span>
          <span>Rs. 10000</span>
        </div>
      </div>
      </div>

  );
};
