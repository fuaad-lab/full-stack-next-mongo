"use client";

import { API_URL } from "@/app/lib/config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React from "react";

const TodoForm = () => {

  const router = useRouter();
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    const data = {
        title: formData.get("title") ,
    }
    try {
        const res = await fetch(`${API_URL}/api/todo`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        await res.json();
        router.refresh();
        console.log(res)
        form.reset();
    } catch (error) {
        console.log(error)
        
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full items-center flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="title" placeholder="Title of your Todo" />
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
