import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
    const list=useSelector((state)=>state.list)
  return (
    <div>
      {
     list && list.length? list.map((el) => {
      return  <TodoCard key={el.id} el={el} />

     }):"No list"

      }
    </div>
  );
};

export default TodoList;
