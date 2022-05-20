import React from "react";
import "./style.css";
import SingleTodo from "./SingleTodo";
import { GetAll } from "../hooks/GetAll";

export const TodoList = () => {
  const { isLoading, setTodos, isError, todos } = GetAll();
 
  return (
    <>
    <div>{isLoading && <p>Loading.....</p>}</div>
    <div>{isError && <p>Something went wrong....</p>}</div>
     
      <div className="todos">
        {todos.map((todo) => (
          
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
