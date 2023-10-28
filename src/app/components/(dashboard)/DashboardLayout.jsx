"use client";
import React from "react";
import Sidebar from "../Sidebar";
import DashboardTopbar from "../DashboardTopbar";
import DashboardHeading from "../DashboardHeading";

const DashboardLayout = ({ children }) => {
  let user = null;
  if (typeof window !== "undefined") {
    user = sessionStorage.getItem("user");
    user = JSON.parse(user);
  }

  const userType = user.userType;
  console.log(userType);

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="max-w-[1480px] px-1 w-full flex md:gap-12 gap-6">
          <div className="hidden sm:block">
            <Sidebar userType={userType} username={user.username} />
          </div>

          <div className="dashboard w-full max-h-[95vh] my-4 bg-light rounded-xl border border-gray-500 py-4 px-4 flex flex-col md:gap-6 gap-10 overflow-auto min-h-[95vh]">
            <div className="fixed bottom-0 left-0 w-full md:border-none border md:border-gray-500 rounded-lg p-2 md:bg-light md:bg-light card-color z-10 md:static">
              <DashboardTopbar userType={userType} username={user.username} />
            </div>

            <div>{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;
