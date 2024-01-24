import React, { useState } from "react";
import Delete from "../../assets/bin.png";
import axios from "axios";

type Props = {
  task: {
    id: string;
    task: string;
    checked: boolean;
  };
  deleteTodo: (id: string) => void;
  isChecked: (val: boolean, id: string) => void;
};

const ToDo = ({ task, deleteTodo, isChecked }: Props) => {
  const [checked, setChecked] = useState(task?.checked);

  function handleChecked() {
    console.log(task.checked);
    isChecked(!checked, task.id);
    setChecked(!checked);
  }

  return (
    <div className="flex justify-between gap-[5px]">
      <input
        type="checkbox"
        className="form-check-input ml-[10px]"
        checked={task.checked}
        onChange={handleChecked}
      ></input>
      <p className={task.checked ? "flex-1 m-0 line-through" : "flex-1 m-0"}>
        {task.task}
      </p>
      <button className="">
        <img
          className="w-[20px] mr-[15px]"
          src={Delete}
          alt="delete"
          onClick={() => deleteTodo(task.id)}
        ></img>
      </button>
    </div>
  );
};

export default ToDo;
