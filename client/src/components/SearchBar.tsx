import { TodoById } from "../hooks/GetById";
import React, { useRef, useState } from "react";
import "./style.css";
import SingleTodo from "./SingleTodo";
import { TodoList } from "./TodoList";

export const SearchBar = () => {
  const { todos, setTodo, isLoading, isError } = TodoById("");
   const [show, setShow] = useState<boolean>(true)
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
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
          setShow(false)
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
     
     {show ? (
      <TodoList/>
      ) : (<div className="todos">
      {todos.length > 0 && todos.map((todo) => (
        
        <SingleTodo
          todoparam={todo}
          key={todo.id}
        
        /> 
    
        
      ))}
    </div> )} 
      
      
    </>
  );
};
