import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const BlackBtn = (props) => {
  return (
    <button className="w-full bg-black px-2 py-2.5 rounded-md font-semibold text-md duration-100 border border-gray-600 flex items-center justify-center gap-3 hover:bg-gray-900">
      {props.icon == "google" ? <FcGoogle size={20} /> : ""}
      {props.icon == "github" ? <BsGithub size={20} /> : ""}

      {props.text}
    </button>
  );
};

export default BlackBtn;
