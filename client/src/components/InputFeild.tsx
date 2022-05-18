import React, { useRef, useState } from "react";
import "./style.css";
import { CreateTodo } from "../hooks/InputAdd";

export const InputFeild = () => {
  const [todo, setTodo] = useState<string>("");
  const { isError, isLoading, createTodo } = CreateTodo();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTodo({
      todo,
      isDone: false,
    });

    setTodo("");
  };

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input_box"
      />

      <button className="input_submit" type="submit">
        Submit
      </button>
    </form>
  );
};
