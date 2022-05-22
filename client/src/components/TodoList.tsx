import React, { Dispatch, SetStateAction, useEffect } from "react";
import "./style.css";
import SingleTodo from "./SingleTodo";
import { GetAll } from "../hooks/GetAll";

interface props {
  isTrue: boolean
  setIsTrue: Dispatch<SetStateAction<boolean>>;
  }

export const TodoList: React.FC<props>  = ({isTrue, setIsTrue}) => {
  const {getTodosData, isLoading, isError, todos } = GetAll();

  useEffect(() => {
   getTodosData()
  }, [isTrue]);
 
  return (
    <>
    <div>{isLoading && <p>Loading.....</p>}</div>
    <div>{isError && <p>Something went wrong....</p>}</div>
     
      <div className="todos">
        {todos.map((todo) => (
          
          <SingleTodo 
           isTrue={isTrue}
           setIsTrue={setIsTrue}
           todoparam={todo}
            key={todo.id}
          /> 
        ))}
      </div>
      
    </>
  );
};
