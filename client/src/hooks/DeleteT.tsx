import {  useState } from "react";
import { deleteTodo } from "../api/API";


export const HandleDelete = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
  
    const deleteTodoId = async (id: number) => {
      try {
        setIsLoading(true)
        setIsError(false)
        await deleteTodo(id)
       
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
      setIsLoading(false)
    }
  
    return {
      isError,
      isLoading,
      deleteTodoId
    }
  
};