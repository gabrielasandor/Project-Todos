import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useUpdateTodo } from "../hooks/UpdateTodo";
import { ITodo } from "../types/todo";
import { DeleteIndex } from "./DeleteIndex";

const SingleTodo: React.FC<{todoparam: ITodo;}> = ({ todoparam }) => {
  const [isDone, setIsDone] = useState(todoparam.isDone);
  const [todo, setEditTodo] = useState(todoparam.todo);
  const { updateTodo } = useUpdateTodo();

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (todoparam.isDone === false) {
      inputRef.current?.focus();
    }
  };

  const handleDone = () => {
    if(todoparam.isDone === false){
     setIsDone(true)
    }else  {
      setIsDone(false)
    }
  }

  const handleEdit = async (
    e: React.FormEvent<HTMLFormElement>,
    id: number
  ) => {
    e.preventDefault();
    await updateTodo({ id: todoparam.id, todo, isDone });
  };

  return (
    <form
      className="todos_single"
      onSubmit={(e) => handleEdit(e, todoparam.id)}
    >
      <input
        value={todo}
        onChange={(e) => setEditTodo(e.target.value)}
        className={`todos_single_text ${todoparam.isDone ? "completedtrue" : ""}`}
        ref={inputRef}
      />

      <div>
        <span
          className="icon"
          onClick={focusInput}
        >
          <AiFillEdit />
        </span>
        <DeleteIndex todoparam={todoparam}></DeleteIndex>
        <span className="icon"
        onClick={handleDone}
         >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
