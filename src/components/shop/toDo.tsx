import React, { useState } from "react";
// import Edit from "../../assets/edit.png";
import Delete from "../../assets/bin.png";

type Props = {
  task: {
    id: number;
    task: string;
  };
  deleteTodo: (id: number) => void;
};

const ToDo = ({ task, deleteTodo }: Props) => {
  const [checked, setChecked] = useState(false);
  const [click, setClick] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <div className="flex justify-between gap-[5px]">
      <input
        type="checkbox"
        className="form-check-input"
        onChange={handleChecked}
      ></input>
      <p className={checked ? "flex-1 m-0 line-through" : "flex-1 m-0"}>
        {task.task}
      </p>
      <button className="">
        <img
          className="w-[20px]"
          src={Delete}
          alt="delete"
          onClick={() => deleteTodo(task.id)}
        ></img>
      </button>
    </div>
  );
};

export default ToDo;

{
  /* <button>
          <img className="w-[20px]" src={Edit} alt="edit"></img>
        </button> */
}
