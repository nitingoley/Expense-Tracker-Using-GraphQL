import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "../graphql/mutations/user.mutation";
import Card from "../components/Card";
import Cards from "../components/Cards";



ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  // for static hard coded
  const chartData = {
    labels: ["Saving", "Expense", "Investment"],
    datasets: [
      {
        label: "%",
        data: [13, 8, 3],
        backgroundColor: [
          "rgba(75, 192, 192)",
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
        ],
        borderColor: [
          "rgba(75, 192, 192)",
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
        borderRadius: 30,
        spacing: 10,
        cutout: 130,
      },
    ],
  };

  // for dynamic
  // const [chartData, setChartData] = useState({
  //   labels: [],
  //   datasets: [
  //     {
  //       labels: "$",
  //       data: [],
  //       backgroundColor: [],
  //       borderColor: [],
  //       borderWidth: 1,
  //       borderRadius: 30,
  //       spacing: 10,
  //       cutout: 130,
  //     },
  //   ],
  // });

  const [logout,{loading}] = useMutation(LOGOUT, {
    refetchQueries: ["GetAuthenticatedUser"],
  });
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Error loggin out", error);
      toast.error(error.message);      
    }
  };

 
  return (
    <>
      <div className="flex flex-col gap-6 items-center  max-w-7xl mx-auto z-20 relative justify-center">
        <div className="flex items-center">
          <p className="md:text-4xl text-2xl lg:text-4xl font-bold text-center relative z-50 mb-4 mr-4  bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text">
            Spend wisely, track wisely
          </p>
          <img
            src="https://i.pinimg.com/474x/63/67/04/636704b2e867dd606d8292e2bf7e6db8.jpg"
            alt="Avatar"
            className="w-11 h-11 rounded-full border cursor-pointer"
          />
          {!loading && (
            <MdLogout
              className="mx-2 w-5 h-5 cursor-pointer"
              onClick={handleLogout}
            />
          )}
          {loading && (
            <div className="w-6 h-6 border-b-2 mx-2 rounded-full animate-spain"></div>
          )}
        </div>
        <div className="flex flex-wrap w-full justify-center items-center gap-6">
          <div className="h-[330px] w-[330px] md:h-[360px] md:w-[360px] ">
            <Doughnut data={chartData} />
          </div>
        <TransactionForm />
        </div>
        <Cards />
      </div>
    </>
  );
}
