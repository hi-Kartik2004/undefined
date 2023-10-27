import React from "react";
import { FcGoogle } from "react-icons/fc";

const HeroBtn = (props) => {
  return (
    <>
      <button type="submit" className="w-full bg-blue px-2 py-2.5 rounded-md font-semibold text-md hover:bg-blue-600 ease-in-out duration-300 border-gray-600 border flex gap-3 items-center justify-center">
        {props.text}
      </button>
    </>
  );
};

export default HeroBtn;
