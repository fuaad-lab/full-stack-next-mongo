'use client'

import { useRouter } from "next/navigation";
import React from "react";

const DeleteTodo = ({ todoId }: { todoId: string }) => {
    const router = useRouter();

    const handleDelte = async() => {

        try {

            const res = await fetch(`http://localhost:3000/api/todo/`+ todoId, {
                method: 'DELETE',
            })
            await res.json();
            router.refresh();
            console.log(res)
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
      <button
        onClick={handleDelte}
        type="button"
        className={`relative inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-rose-900 ring-1 ring-inset ring-grey-300 hover:bg-gray-50 focus:z-10`}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteTodo;
