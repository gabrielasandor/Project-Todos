import React, { Dispatch, SetStateAction, useState } from "react";
import { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useUpdateTodo } from "../hooks/UpdateTodo";
import { ITodo } from "../types/todo";
import { DeleteIndex } from "./DeleteIndex";
import { IsDone } from "./IsDone";

interface props {
  isTrue: boolean
  setIsTrue: Dispatch<SetStateAction<boolean>>;
  todoparam: ITodo;
  }

const SingleTodo: React.FC<props> = ({ todoparam, isTrue, setIsTrue}) => {
  const [todo, setEditTodo] = useState(todoparam.todo);
  const { updateTodo } = useUpdateTodo();

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (todoparam.isDone === false) {
      inputRef.current?.focus();
    }
  };

  const handleEdit = async (
    e: React.FormEvent<HTMLFormElement>,
    id: number
  ) => {
    e.preventDefault();
    await updateTodo({ id: todoparam.id, todo, isDone:todoparam.isDone });
    setIsTrue(!isTrue)
  };

  return (
    <form
      className="todos_single"
     onSubmit={(e) => {
     handleEdit(e, todoparam.id);
    inputRef.current?.blur();
  }}
    >
      <input
        value={todo}
        onChange={(e) => setEditTodo(e.target.value)}
        className={`todos_single_text ${todoparam.isDone ? "completedtrue" : ""}`}
        ref={inputRef}
      />

      <div>
        <span className="icon" onClick={focusInput} >
          <AiFillEdit />
        </span>
        <DeleteIndex todoparam={todoparam}  isTrue={isTrue} setIsTrue={setIsTrue}></DeleteIndex>
        
       <IsDone todoparam={todoparam}  isTrue={isTrue} setIsTrue={setIsTrue}></IsDone>
      </div>
    </form>
  );
};

export default SingleTodo;
