"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Password = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex flex-col">
      <label className="text-sm my-2">{props.label}</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        className="px-2 py-2 rounded-md w-full bg-light"
      />
      {showPassword ? (
        <FaRegEyeSlash
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          size={20}
          className="eye select-none absolute right-0"
        />
      ) : (
        <FaRegEye
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          size={20}
          className="eye select-none absolute right-0"
        />
      )}
    </div>
  );
};

export default Password;
