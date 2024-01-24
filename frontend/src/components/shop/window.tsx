import React, { useState } from "react";
import Input from "./input";
import ToDo from "./toDo";
import axios from "axios";
import { v4 as uuid } from "uuid";

type Data = {
  id: string;
  task: string;
  checked: boolean;
};

const Window = () => {
  const [todos, setTodos] = useState<Data[]>(
    JSON.parse(localStorage.getItem("tasks") as string)
      ? JSON.parse(localStorage.getItem("tasks") as string)
      : []
  );

  const [values, setValues] = useState({
    id: parseInt(localStorage.getItem("id") as string),
    tasks: localStorage.getItem("tasks"),
    count: parseInt(localStorage.getItem("count") as string),
  });
  const [count, setCount] = useState(0);

  const addTodo = (todo: string) => {
    setTodos([...todos, { id: uuid(), task: todo, checked: false }]);
    setCount(count + 1);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (todos.length == 1) {
      localStorage.setItem("tasks", "[]");
    }
  };

  const isChecked = (val: boolean, id: string) => {
    todos.find((todo) => {
      if (todo.id == id) {
        return (todo.checked = val);
      }
    });
  };
  return (
    <div className="w-[90vw] bg-[#f0f8ff] lg:w-[40vw] rounded-[10px] shadow-md p-[20px] min-h-[50vh]">
      <Input key="input" addTodo={addTodo} />
      <h1 className="text-center text-slate-700 mb-[20px]">
        ToBuy
        {localStorage.getItem("name") && ` for ${localStorage.getItem("name")}`}
      </h1>
      <div className="h-[28vh] overflow-y-auto">
        {todos.map((todo, index) => {
          localStorage.setItem("tasks", JSON.stringify(todos));
          axios
            .post("http://localhost:8081/", values)
            .then((res) => {
              // console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          return (
            <ToDo
              isChecked={isChecked}
              task={todo}
              key={index}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Window;
