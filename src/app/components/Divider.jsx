import React from "react";

const Divider = (props) => {
  return (
    <div className="w-full divider my-2">
      <span>{props.text}</span>
    </div>
  );
};

export default Divider;
