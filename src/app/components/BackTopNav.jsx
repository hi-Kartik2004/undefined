// "use-client";
import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const BackTopNav = (props) => {
  return (
    <>
      <Link
        href={`${props.route}`}
        className={`absolute ${
          props.location == "left" ? "left-6" : "right-6 flex-row-reverse"
        } top-6 flex gap-2 items-center`}
      >
        {props.location != "left" ? (
          <BsArrowLeft className=" rotate-180" />
        ) : (
          <BsArrowLeft />
        )}{" "}
        {props.text}
      </Link>
    </>
  );
};

export default BackTopNav;
