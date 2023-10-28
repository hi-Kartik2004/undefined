import React from "react";
import Input from "../components/Input";
import Link from "next/link";
import { BiSolidBell } from "react-icons/bi";
import Mobilenav from "./Mobilenav";
import FormDialog from "./FormDialog";
import AvatarBadge from "./Avatar";
import Dropdown from "./Dropdown";
import FormDialogForVideo from "./FormDialogForVideo";

const DashboardTopbar = (props) => {
  const href = window.location.href;
  const dialogFormFieldsForFolder = {
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
          {props.userType === 1 ? (
            <FormDialog
              text="Add Folder"
              subheading="Fill up the details below"
              children={dialogFormFieldsForFolder}
            />
          ) : (
            <FormDialogForVideo
              text="Add Video"
              subheading="Fill up the details below"
              children={dialogFormFields}
            />
          )}

          <Dropdown
            avatar="true"
            links={[
              {
                text: "View Profile",
                href: `/${props.userType === 1 ? "creator" : "editor"}/${
                  props.username
                }`,
              },
              {
                text: "Logout",
                href: "logout",
              },
            ]}
          />

          {/* <Link
            href={`/${props.userType === 1 ? "creator" : "editor"}/${
              props.username
            }`}
            className="rounded-md bg-color p-1 flex justify-center items-center w-[40px] h-[40px] border border-gray-500"
          >
            <AvatarBadge />
          </Link> */}
          <Link
            href={`/${props.userType === 1 ? "creator" : "editor"}/${
              props.username
            }/notifications`}
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
