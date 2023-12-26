import React, { useState } from "react";
import Edit from "../../assets/edit.png";
import Delete from "../../assets/bin.png";

type Props = {};

const ToDo = ({ text }: any) => {
  const [checked, setChecked] = useState(false);
  const handleClick = (event: any) => {};
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex justify-between gap-[5px]">
      <input
        type="checkbox"
        className="form-check-input"
        onChange={handleChecked}
      ></input>
      <p className={checked ? "flex-1 m-0 line-through" : "flex-1 m-0"}>
        {text}
        {/* <button>
          <img className="w-[10px]" src={Edit} alt="edit"></img>
        </button> */}
      </p>
      <button onClick={handleClick} className="">
        <img className="w-[20px]" src={Delete} alt="delete"></img>
      </button>
    </div>
  );
};

export default ToDo;
