import React from "react";

const Textarea = (props) => {
  return (
    <>
        <label className="text-sm">{props.label}</label>
      {props.required ? (
        <textarea className="Textarea" rows={5} required />
      ) : (
        <textarea className="Textarea" rows={5} />
      )}
    </>
  );
};

export default Textarea;
