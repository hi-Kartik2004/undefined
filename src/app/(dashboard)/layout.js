import React from "react";
import DashboardLayout from "../components/(dashboard)/DashboardLayout";

const layout = ({children}) => {
  return (
    <>
      <DashboardLayout children={children}/>
    </>
  );
};

export default layout;
