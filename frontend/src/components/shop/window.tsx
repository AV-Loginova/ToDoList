import React, { useState } from "react";
import Input from "./input";
import ToDo from "./toDo";

type Data = {
  id: number;
  task: string;
  checked: boolean;
};

const Window = () => {
  const [todos, setTodos] = useState<Data[]>([]);
  const [count, setCount] = useState(0);

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: count, task: todo, checked: false }]);
    setCount(count + 1);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const isChecked = (val: boolean, id: number) => {
    todos[id].checked = val;
  };
  return (
    <div className="w-[90vw] bg-[#f0f8ff] lg:w-[40vw] rounded-[10px] shadow-md p-[20px] min-h-[50vh] overflow-auto">
      <Input key="input" addTodo={addTodo} />
      <h1 className="text-center text-slate-700 mb-[20px]">ToBuy</h1>
      <div>
        {todos.map((todo, index) => (
          <ToDo
            isChecked={isChecked}
            task={todo}
            key={index}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Window;
