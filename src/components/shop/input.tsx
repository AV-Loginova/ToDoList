import React, { useState } from "react";

type Props = {
  addTodo: (todo: string) => void;
};

export default function Input({ addTodo }: Props) {
  const [value, setValue] = useState("");

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <div className="mb-[20px] flex gap-[5px]">
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        type="text"
        className="border-[1px] border-gray-400 rounded-[5px] p-[6px]"
        placeholder="chicken"
      ></input>
      <button
        type="submit"
        onClick={handleClick}
        className="btn btn-primary w-[100px]"
        disabled={!value ? true : false}
      >
        Add
      </button>
    </div>
  );
}
