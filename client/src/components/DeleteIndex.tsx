import { Dispatch, SetStateAction } from "react";
import { AiFillDelete } from "react-icons/ai";
import { HandleDelete } from "../hooks/DeleteT";
import { ITodo } from "../types/todo";
interface props {
  isTrue: boolean;
  setIsTrue: Dispatch<SetStateAction<boolean>>;
  todoparam: ITodo;
}

export const DeleteIndex: React.FC<props> = ({
  todoparam,
  isTrue,
  setIsTrue,
}) => {
  const { deleteTodoId } = HandleDelete();

  /* <span className="icon" onClick={() => deleteTodoId(todoparam.id)}>
      <span className="icon" onClick={() => setIsTrue(!isTrue)}>
        <AiFillDelete />
      </span>
    </span>
    */
  return (
    <span
      className="icon"
      onClick={() => {
        deleteTodoId(todoparam.id);
        setIsTrue(!isTrue);
      }}
    >
      <AiFillDelete />
    </span>
  );
};
