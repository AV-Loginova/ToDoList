import React, { useState } from "react";
import Input from "./input";
import ToDo from "./toDo";

type Data = {
  id: number;
  task: string;
};

const data: Data[] = [];

const Window = () => {
  const [todos, setTodos] = useState<Data[]>([]);
  const [count, setCount] = useState(0);

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: count, task: todo }]);
    setCount(count + 1);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className=" bg-[#f0f8ff] w-[40%] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto">
      <Input key="input" addTodo={addTodo} />
      <h1 className="text-center text-slate-700 mb-[20px]">ToBuy</h1>
      <div>
        {todos.map((todo, index) => (
          <ToDo task={todo} key={index} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default Window;
