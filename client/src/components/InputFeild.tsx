import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import "./style.css";
import { CreateTodo } from "../hooks/InputAdd";
interface props {
  isTrue: boolean;
  setIsTrue: Dispatch<SetStateAction<boolean>>;
}

export const InputFeild: React.FC<props> = ({ isTrue, setIsTrue }) => {
  const [todo, setTodo] = useState<string>("");
  const { isError, createTodo } = CreateTodo();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTodo({
      todo,
      isDone: false,
    });
    setTodo("");
    setIsTrue(!isTrue);
  };

  return (
    <>
      <div>{isError && <p>Something went wrong....</p>}</div>

      <div className="add_todo">
        <form
          onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
          }}
          className="back"
        >
          <input
            ref={inputRef}
            type="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="  +"
            className="extand "
          />
        </form>
      </div>
    </>
  );
};
