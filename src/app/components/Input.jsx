import React from "react";

const Input = (props) => {
  return (
    <>
      <label className="text-sm my-2">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="px-2 py-2 rounded-md w-full bg-light"
      />
    </>
  );
};

export default Input;
