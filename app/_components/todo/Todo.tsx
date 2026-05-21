import React from "react";
import { TodoItemProps } from "./Todos";
import DoneTodo from "./DoneTodo";
import DeleteTodo from "./DeleteTodo";

interface TodoProps {
  todo: TodoItemProps;
}
const Todo = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <li className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <p
            className={`text-sm font-semibold leading-6 text-gray-900 ${
              todo.isDone && "line-through"
            }`}
          >
            {todo.title}
          </p>
        </div>
        <div className='flex'>
            <span className='inline-flex isolate rounded-md shadow-sm'>
                <DoneTodo todoId={todo._id} isDone={todo.isDone} />
                <DeleteTodo todoId={todo._id} />
            </span>
        </div>      
      </li>
    </div>
  );
};

export default Todo;
