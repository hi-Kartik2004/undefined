import React from "react";
import { BsSearch } from "react-icons/bs";

const Input = (props) => {
  return (
    <div className="relative">
      {props.label && <label className="text-sm my-2">{props.label}</label>}
      <input
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        className={`${
          props.search ? "max-w-[150px] md:max-w-full" : ""
        } py-2 w-full ${props.dark ? "bg-color" : "bg-light"} ${
          props.rounded ? "rounded-full" : "rounded-md"
        } ${props.search ? "pl-2 md:pl-12" : "px-2"}`}
      />
      {props.search && (
        <BsSearch size={20} className="hidden md:block absolute left-4 top-2" />
      )}
    </div>
  );
};

export default Input;
