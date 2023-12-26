import React, { useState } from "react";

export default function Input({ onChange, onClick }: any) {
  const [value, setValue] = useState("");
  const handleChange = (event: any) => {
    onChange(event.target.value);
    setValue(event.target.value);
  };
  function handleClick(event: any) {
    onClick(event.target);
    setValue("");
  }
  return (
    <div className="mb-[20px] flex gap-[5px]">
      <input
        value={value}
        onChange={handleChange}
        type="text"
        className="border-[1px] border-gray-400 rounded-[5px] p-[6px]"
        placeholder="chicken"
      ></input>
      <button
        onClick={handleClick}
        className="btn btn-primary w-[100px]"
        disabled={!value ? true : false}
      >
        Add
      </button>
    </div>
  );
}
