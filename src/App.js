/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import {
  deleteTodo,
  getTodo,
  getTodos,
  patchTodo,
  postTodo,
  putTodo,
} from "./apis/todos/apistodos";

const App = () => {
  useEffect(() => {
    const result = getTodo(3);
    console.log(result);
    // getTodos();
    // const todo = {
    //   title: "안녕하세요. 오늘 할일입니다.",
    //   completed: false,
    // };
    // postTodo(todo);
    // putTodo(3, todo);
    // patchTodo(5, todo);
    // deleteTodo(10);
  }, []);
  return <div></div>;
};

export default App;
