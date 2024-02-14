import Chart from "react-apexcharts";
import { useTransaction } from "../../context";
const options = {
  labels: ["Income", "Expense"],
  colors: ["green","red"],
  chart: {
    width: "150px",
    height:"500px"
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: true,
  },
  dataLabels: {
    enabled: true,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: true,
      donut: {
        labels: {
          show: true,
        },
      },
    },
  },
  fill: {
    colors: ["#13941a","#c52b2b"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export const Balancechart=({expense = 100, income = 100})=> {
  //adding income and expense
  const {totalIncome, totalExpenses}= useTransaction();
  
    return (
    <Chart
      options={options}
      series={[totalIncome, totalExpenses]}
      type="pie"
      width={"450px"}
      height={"450px"}
    />
  );
}