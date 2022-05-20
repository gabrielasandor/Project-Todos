import { TodoById } from "../hooks/GetById";
import React, { useRef } from "react";
import "./style.css";
import SingleTodo from "./SingleTodo";

export const SearchBar = () => {
  const { todos, setTodos, setTodo, isLoading, isError } = TodoById("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form);
    const input = form.querySelector("#search_text") as HTMLInputElement;
    setTodo(input.value);
    input.value = "";
  };

  return (
    <>
      <form
        autoComplete="off"
        className="input"
        onSubmit={(e) => {
          handleSearch(e);
          inputRef.current?.blur();
        }}
      >
        <input
          placeholder="Search a task"
          className="input_box"
          id="search_text"
        />

        <button className="input_submit" type="submit">
          Search
        </button>
      </form>
      <div>{isLoading && <p>Loading...</p>}</div>
      <div>{isError && <p>Something went wrong</p>}</div>
      <div></div>
      <div>{isError && <p>Something went wrong....</p>}</div>
      <div className="todos">
        {todos.length > 0 && todos.map((todo) => (
          
          <SingleTodo
            todoparam={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          /> 
      
          
        ))}
      </div>


    </>
  );
};
