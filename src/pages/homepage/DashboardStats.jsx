import React from "react";
import { useLoaderData } from "react-router";

const DashboardStats = () => {
  const friends = useLoaderData();
  return (
    <div className="mt-10 w-11/12 mx-auto grid grid-cols-12 gap-4 pb-8 border-b-1 border-gray-300">
      <div className="flex flex-col bg-base-100 py-8 px-12 justify-center items-center rounded-2xl col-span-12 sm:col-span-6 lg:col-span-3">
        <h4 className="text-4xl mb-2">{friends.length}</h4>
        <p>Total Friends</p>
      </div>
      <div className="flex flex-col bg-base-100 py-8 px-12 justify-center items-center rounded-2xl col-span-12 sm:col-span-6 lg:col-span-3">
        <h4 className="text-4xl mb-2">3</h4>
        <p>On Track</p>
      </div>
      <div className="flex flex-col bg-base-100 py-8 px-12 justify-center items-center rounded-2xl col-span-12 sm:col-span-6 lg:col-span-3">
        <h4 className="text-4xl mb-2">6</h4>
        <p>Need Attention</p>
      </div>
      <div className="flex flex-col bg-base-100 py-8 px-12 justify-center items-center rounded-2xl col-span-12 sm:col-span-6 lg:col-span-3">
        <h4 className="text-4xl mb-2">{friends.length}</h4>
        <p>Interactions This Month</p>
      </div>
    </div>
  );
};

export default DashboardStats;
