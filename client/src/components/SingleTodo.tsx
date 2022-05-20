import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useUpdateTodo } from "../hooks/UpdateTodo";
import { ITodo } from "../types/todo";
import { DeleteIndex } from "./DeleteIndex";


const SingleTodo: React.FC<{
  todoparam: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}> = ({ todoparam, todos, setTodos }) => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [todo, setEditTodo] = useState(todoparam.todo);
  const [edit, setEdit] = useState<boolean>(false);
  const { isError, isLoading, updateTodo } = useUpdateTodo()
  
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault()
    await updateTodo({ id: todoparam.id, todo, isDone })
  }


  const handleDone = (id: number) => {
    setTodos(
         todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone  } : todo
      )
    );
  };

//   const handleDone = (id: number) => {
//     setTodos(todos.map((item) => {
//         if (item.id === todoparam.id) {
//             return {
//                 ...item, isDone: true
//             }
//         }
//        return item;
//     }))
// }

  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todoparam.id)}>
      
        <input
          value={todo}
          onChange={(e) => setEditTodo(e.target.value)}
          className={`todos_single_text ${todoparam.isDone ? 'completed' : ''}`} 
          ref={inputRef}
        />
      
      <div>
        <span
          className="icon"
          onClick={() => {
            setEdit(todoparam.isDone);
          }}
        >
          <AiFillEdit />
        </span>
       <DeleteIndex todoparam={todoparam}></DeleteIndex>
        <span className="icon" onClick={() => handleDone(todoparam.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
