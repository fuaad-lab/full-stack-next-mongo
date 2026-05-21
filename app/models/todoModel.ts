import { Model, model, models, Schema  } from "mongoose";

interface TodoDucument extends Document {
  title: string;
  isDone: boolean;
}

const todoSchema = new Schema<TodoDucument>(
  {
    title: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const todoModel = models?.todo || model<TodoDucument>("todo", todoSchema);

export default todoModel as Model<TodoDucument>;