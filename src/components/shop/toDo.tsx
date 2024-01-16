import React, { useState } from "react";
import Delete from "../../assets/bin.png";

type Props = {
  task: {
    id: number;
    task: string;
    checked: boolean;
  };
  deleteTodo: (id: number) => void;
  isChecked: any;
};

const ToDo = ({ task, deleteTodo, isChecked }: Props) => {
  const [checked, setChecked] = useState(task?.checked);

  function handleChecked() {
    isChecked(!checked, task.id);
    setChecked(!checked);
  }

  return (
    <div className="flex justify-between gap-[5px]">
      <input
        type="checkbox"
        className="form-check-input"
        checked={task.checked}
        onChange={handleChecked}
      ></input>
      <p className={task.checked ? "flex-1 m-0 line-through" : "flex-1 m-0"}>
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
