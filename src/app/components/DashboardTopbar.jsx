import React from "react";
import Input from "../components/Input";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidBell } from "react-icons/bi";
import Mobilenav from "./Mobilenav";

const DashboardTopbar = (props) => {
  return (
    <>
      <div className="flex w-full justify-between">
        <form className="max-w-[500px] w-full flex gap-4 items-center">
          <Mobilenav />
          <Input
            placeholder="Search for files"
            type="text"
            dark="true"
            rounded=""
            search="true"
          />
        </form>

        <div className="dashboard__links md:max-w-[300px] max-w-[125px] w-full flex justify-end gap-5 items-center">
          {/* <span>User id: {props.userId}</span> */}
          <Link
            href="/"
            className="rounded-md bg-color p-1 flex justify-center items-center w-[40px] h-[40px] border border-gray-500"
          >
            <MdAccountCircle size={25} />
          </Link>
          <Link
            href="/"
            className="rounded-md bg-color p-1 flex justify-center items-center w-[40px] h-[40px] border border-gray-500"
          >
            <BiSolidBell size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardTopbar;
