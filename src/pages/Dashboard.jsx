import React, { useState, useEffect } from "react";
import BarChart from "../components/Chart/BarChart";
import StockChart from "../components/Chart/stockChart";

const Dashboard = () => {
  const [totalData, setTotalData] = useState("");
  const [incomeData, setIncomeData] = useState("");
  const [spendingData, setSpendingData] = useState("");
  const [growthRate, setGrowthRate] = useState("");
  const [transfers, setTransfers] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [cashback, setCashback] = useState("");
  const [data, setData] = useState({});
  const [barData, setBarData] = useState({});

  useEffect(() => {
    setTotalData("$14 564");
    setIncomeData("$21 134");
    setSpendingData("$7981");
    setGrowthRate("23%");
    setTransfers("$1920");
    setWithdraw("$6932");
    setCashback("$476");
    setData({
      stockFullName: "SW Limited.",
      stockShortName: "ASX:SFW",
      price: {
        current: 2.32,
        open: 2.23,
        low: 2.215,
        high: 2.325,
        cap: 93765011,
        ratio: 20.1,
        dividend: 1.67,
      },
      chartData: {
        labels: [
          "10:00",
          "",
          "",
          "",
          "12:00",
          "",
          "",
          "",
          "2:00",
          "",
          "",
          "",
          "4:00",
        ],
        data: [
          2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325,
          2.325, 2.32,
        ],
      },
    });
    setBarData({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [-450, 989, -311, -874, 567, 600, -403],
          backgroundColor: "rgb(255, 99, 132)",
        },
        {
          label: "Dataset 2",
          data: [450, -989, 311, 874, -567, -600, 403],
          backgroundColor: "rgb(255, 99, 132)",
        },
        {
          label: "Dataset 3",
          data: [220, -768, 654, -954, 567, -245, 985],
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
    });
  }, []);

  console.log(barData);

  return (
    <>
      <div className="mx-4 flex justify-between rounded-lg shadow-md">
        <div className="mx-4"> Total: {totalData}</div>
        <div className="mx-4"> Income: {incomeData}</div>
        <div className="mx-4"> Spending: {spendingData}</div>
        <div className="mx-4"> Growth Rate: {growthRate}</div>
        <div className="mx-4"> Transfers: {transfers}</div>
        <div className="mx-4"> Withdraw: {withdraw}</div>
        <div className="mx-4"> Cashback: {cashback}</div>
      </div>
      <div className="flex justify-between">
        <div className="w-[67vw] h-[100vh] mt-8 rounded-lg bg-white shadow-md mx-4 hover:shadow-lg">
          <div className="flex justify-between">
            <div className="w-[500px] h-50 mt-8 rounded-lg bg-red-300 shadow-md mx-4 hover:shadow-lg">
              {data.chartData ? <StockChart info={data} /> : null}
            </div>
            <div className="w-96 h-96 mt-8 rounded-lg bg-yellow-100 shadow-md mx-4 hover:shadow-lg">
              {barData ? <BarChart info={barData} /> : null}
            </div>
          </div>
        </div>
        <div className="w-[500px] h-[100vh] mt-8 rounded-lg bg-yellow-700 shadow-md mx-4 hover:shadow-lg">
          <div className="flex flex-col">
            <div className="w-85 h-80 mt-8 rounded-lg bg-white shadow-md mx-4 hover:shadow-lg"></div>
            <div className="w-85 h-80 mt-8 rounded-lg bg-white shadow-md mx-4 hover:shadow-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
