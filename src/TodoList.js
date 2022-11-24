import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const list = useSelector((state) => state.list);
  const filtert = useSelector((state) => state.filtert);
  return (
    <div>
      {list.length
        && filtert == "done"
          ? list
              .filter((el) => el.isdone)
              .map((el) => <TodoCard key={el.id} el={el} />)
          :list.length && filtert == "undone"
          ? list
              .filter((el) => !el.isdone)
              .map((el) => <TodoCard key={el.id} el={el} />)
          : list.map((el) => <TodoCard key={el.id} el={el} />)
        }
    </div>
  );
};

export default TodoList;
