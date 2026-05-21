import connectToDatabase from "@/app/lib/db";
import todoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise< { id: string }> }
) {
  await connectToDatabase();

  const {id} = await params;

  const isDone = await req.json();

  const updatedTodo = await todoModel.findByIdAndUpdate(id, {
    isDone: isDone,
  });

  if (!updatedTodo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTodo, { status: 201 });
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise< { id: string }> }
  ) {
    await connectToDatabase();
  
    const {id} = await params;
    
    const deletedTodo = await todoModel.findByIdAndDelete(id);
  
    if (!deletedTodo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
  
    return NextResponse.json(deletedTodo, { status: 201 });
  }