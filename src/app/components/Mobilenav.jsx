"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Mobilenav = () => {
  const [show, setShow] = useState(false);
  function handleMenu(){
    setShow(!show);
  }
  return (
    <>
      <div
        className="block sm:hidden p-0.5 bg-color border border-gray-500 rounded-lg"
        onClick={handleMenu}
      >
        <AiOutlinePlus size={25} />
      </div>
      <div className={`${show ? "block" : "hidden" }`}>
        <Sidebar />
      </div>
    </>
  );
};

export default Mobilenav;
