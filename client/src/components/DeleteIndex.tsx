
import {  AiFillDelete } from "react-icons/ai";
import { HandleDelete } from "../hooks/DeleteT";
import { ITodo } from "../types/todo";

  export const DeleteIndex: React.FC<{todoparam: ITodo;}> = ({ todoparam }) => {
  const { deleteTodoId  } = HandleDelete();

 
  return (
    
        <span className="icon" onClick={() => deleteTodoId(todoparam.id)}>
          <AiFillDelete/>
        </span>
        
  );
};


