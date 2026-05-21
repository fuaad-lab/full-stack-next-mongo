import connectToDatabase from "@/app/lib/db";
import todoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await connectToDatabase()

    const todos = await todoModel.find().sort({createdAt: 'desc', isDone: 'asc'})
    
    return NextResponse.json(todos, {status: 200})
}

export async function POST(req: NextRequest) {

    await connectToDatabase()
    const body = await req.json()

    const newTodo = new todoModel({
        title: body.title,
        isDone: body.isDone
    })

    await newTodo.save()

    console.log(body)
    return NextResponse.json(newTodo, {status: 201})


}

