import { ITodo } from "../types/todo";
import axios from "axios";
import { ICreateTodo } from "../types/create";
import { IUpdate } from "../types/update";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3002/api",
});

export const getTodos = async () => {
  const { data } = await axiosInstance.get<ITodo[]>("/todos");
  return data;
};

export const getTodoById = async (query: string) => {
  const { data } = await axiosInstance.get<ITodo[]>(`/todos/${query}`)
  console.log(data)
  return data
}


export const postTodo = async (productReq: ICreateTodo) => {
  const { data } = await axiosInstance.post<ITodo>(`/add`, productReq);
  return data;
};


export const putTodo = async ({
  id,
  ...updateProductReq
}: IUpdate) => {
  const { data } = await axiosInstance.put<ITodo>(
    `/update/${id}`,
    updateProductReq
  )
  return data
}



export const deleteTodo = async (id: number) => {
  const { data } = await axiosInstance.delete(`/delete/${id}`)
  return data
}
