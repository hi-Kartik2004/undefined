import Link from "next/link";
import React from "react";
import { FaCrown } from "react-icons/fa";
import { LiaUploadSolid } from "react-icons/lia";
import {
  MdGroups,
  MdOutlineVideoSettings,
  MdReportProblem,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { BsFillCloudCheckFill } from "react-icons/bs";

const IconLink = (props) => {
  return (
    <>
      <Link
        href="/"
        className="flex gap-2 p-2 w-full rounded-lg nav__link duration-300 ease-in-out"
      >
        {props.text == "Uploads" ? (
          <LiaUploadSolid size={20} />
        ) : props.text == "Drafts" ? (
          <MdOutlineVideoSettings size={20} />
        ) : props.text == "My Cloud" ? (
          <BsFillCloudCheckFill size={20} />
        ) : props.text == "Issues" ? (
          <MdReportProblem size={20} />
        ) : props.text == "Editors" ? (
          <MdGroups size={20} />
        ) : props.text == "My Plan" ? (
          <FaCrown size={20} />
        ) : props.text == "Settings" ? (
          <IoIosSettings size={20} />
        ) : props.text == "Logout" ? (
          <FiLogOut size={20} />
        ) : (
          ""
        )}
        <p>
          {props.text} {props.count ? `[${props.count}]` : ""}
        </p>
      </Link>
    </>
  );
};

export default IconLink;
