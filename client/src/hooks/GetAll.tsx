import { useEffect, useState } from "react";
import { ITodo } from "../types/todo";
import { getTodos } from "../api/API";

export const GetAll = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return {
    setTodos,
    todos,
    isLoading,
    isError,
  };
};
