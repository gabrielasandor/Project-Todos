import { ITodo } from "../types/todo";
import axios from "axios";
import { ICreateTodo } from "../types/create";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const getTodos = async () => {
  const { data } = await axiosInstance.get<ITodo[]>("/todos");
  return data;
};


export const postTodo = async (productReq: ICreateTodo) => {
  const { data } = await axiosInstance.post<ITodo>(`/add`, productReq);
  return data;
};
