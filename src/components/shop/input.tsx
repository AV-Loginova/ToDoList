import React, { useState } from "react";

const Input = ({ onChange }: any) => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };
  return (
    <div className="mb-[20px]">
      <input
        onChange={handleChange}
        type="text"
        className="border-[1px] border-gray-400 rounded-[5px] p-[6px]"
        placeholder="chicken"
      ></input>
    </div>
  );
};

export default Input;
