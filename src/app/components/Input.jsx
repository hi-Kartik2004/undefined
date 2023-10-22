import React from "react";
import { BsSearch } from "react-icons/bs";

const Input = (props) => {
  return (
    <div className="relative">
      {props.label ? (
        <label className="text-sm my-2">{props.label} </label>
      ) : (
        ""
      )}
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`py-2 w-full ${props.dark ? "bg-color" : "bg-light"} ${
          props.rounded ? "rounded-full" : "rounded-md"
        } ${props.search ? "pl-12" : "px-2"}`}
      />

      {props.search ? (
        <BsSearch size={20} className="absolute left-4 top-2" />
      ) : (
        "Not"
      )}
    </div>
  );
};

export default Input;
