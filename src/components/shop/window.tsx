import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
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

  const handleChange = (value: any) => {
    setValue(value);
    console.log(value);
  };

  const handleClick = (clicked: any) => {
    setClicked(clicked);
    setCount(count + 1);
    console.log("click");
    data.push({ id: count, text: value });
    console.log(data);
  };

  return (
    <div className=" bg-[#f0f8ff] w-[40%] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto">
      <div className="flex gap-[5px]">
        <Input key="input" onChange={handleChange} />
        <Button key="button" onClick={handleClick} />
      </div>
      <h1 className="text-center text-slate-700 mb-[20px]">ToBuy</h1>
      <div>
        {clicked &&
          todos.map((todo) => <ToDo key={todo.id} text={todo.text} />)}
      </div>
    </div>
  );
};

export default Window;
