import React from "react";
import Input from "../components/Input";
import Link from "next/link";
import { BiSolidBell } from "react-icons/bi";
import Mobilenav from "./Mobilenav";
import FormDialog from "./FormDialog";
import AvatarBadge from "./Avatar";

const DashboardTopbar = (props) => {
  const href = window.location.href;
  const dialogFormFields = {
    text: "Add Folder",
    subheading: "Fill up the details below",
    fields: [
      {
        label: "Folder Name",
        placeholder: "Enter Folder Name",
      },
      {
        label: "Edit Deadline",
        placeholder: "Enter Deadline",
      },
    ],
  };

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
          <FormDialog
            text="Add Folder"
            subheading="Fill up the details below"
            children={dialogFormFields}
          />
          <Link
            href={`${href}/profile`}
            className="rounded-md bg-color p-1 flex justify-center items-center w-[40px] h-[40px] border border-gray-500"
          >
            <AvatarBadge />
          </Link>
          <Link
            href={`${href}/notifications`}
            className="rounded-md bg-color p-1  justify-center items-center w-[40px] h-[40px] border border-gray-500 hidden md:flex"
          >
            <BiSolidBell size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardTopbar;
