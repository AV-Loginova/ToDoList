import React, { useState } from "react";
import Input from "./input";
import ToDo from "./toDo";

type Data = {
  id: number;
  text: string;
};

const data: Data[] = [];

const Window = () => {
  const [todos, setTodos] = useState(data);
  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleClick = (clicked: undefined) => {
    setClicked(clicked);
    setCount(count + 1);
    data.push({ id: count, text: value });
  };

  return (
    <div className=" bg-[#f0f8ff] w-[40%] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto">
      <Input key="input" onChange={handleChange} onClick={handleClick} />
      <h1 className="text-center text-slate-700 mb-[20px]">ToBuy</h1>
      <div>
        {clicked &&
          todos.map((todo) => <ToDo key={todo.id} text={todo.text} />)}
      </div>
    </div>
  );
};

export default Window;
