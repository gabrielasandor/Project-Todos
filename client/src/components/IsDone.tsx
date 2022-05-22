import React, { Dispatch, SetStateAction, useState } from "react";
import { MdDone } from "react-icons/md";
import { useUpdateTodo } from "../hooks/UpdateTodo";
import { ITodo } from "../types/todo";

interface props {
  isTrue: boolean;
  setIsTrue: Dispatch<SetStateAction<boolean>>;
  todoparam: ITodo;
}

export const IsDone: React.FC<props> = ({ todoparam, isTrue, setIsTrue }) => {
  const [isDone, setIsDone] = useState(!todoparam.isDone);
  const { updateTodo } = useUpdateTodo();

  const handleDoneClick = async () => {
    await updateTodo({ id: todoparam.id, todo: todoparam.todo, isDone });
    setIsTrue(!isTrue);
  };

  return (
    <span className="icon" onClick={handleDoneClick}>
      <MdDone />
    </span>
  );
};
