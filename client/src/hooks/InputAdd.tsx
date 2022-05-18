import { useState } from "react";
import { ICreateTodo } from "../types/create";
import { postTodo } from "../api/API";

export const CreateTodo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const createTodo = async (productReq: ICreateTodo) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await postTodo(productReq);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    isError,
    createTodo,
  };
};
