import { useState } from "react"
import { putTodo } from "../api/API"
import { IUpdate } from "../types/update"


export const useUpdateTodo = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
   
    const updateTodo = async (updateReq: IUpdate) => {
      try {
        setIsLoading(true)
        setIsError(false)
        await putTodo(updateReq)
      } catch (err) {
        console.error(err)
        setIsError(true)
      }
      setIsLoading(false)
    }
  
    return {
      isError,
      isLoading,
      updateTodo,
    }
  }