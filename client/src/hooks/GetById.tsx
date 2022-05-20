import { useEffect, useState } from "react"
import { getTodoById } from "../api/API";
import { ITodo } from "../types/todo";


export const TodoById = (query: string) => {
  const [todo, setTodo] = useState<string>('')
 let [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const query = encodeURIComponent(todo);
        if(query) {
          const data = await getTodoById(query)

          setTodos(data)
          
        }
        

      } catch (err) {
        console.error(err)
        setIsError(true)
      }
      setIsLoading(false)
      
    })()
   /// in paranteze pui todo
  }, [todo])

  return {
    todos,
    todo,
    setTodos,
    setTodo,
    isLoading,
    isError,
  }
}