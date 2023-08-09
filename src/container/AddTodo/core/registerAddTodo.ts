import { registerDependecy } from "../../../utils/inversionDependecies";
import { IUseAddTodoAdapter } from "./adapters/IAddTodo.adapter";
import { useAddTodoAdapter } from "./adapters/add-todo.adapter";

export const registerAddTodo = () => {
    registerDependecy<IUseAddTodoAdapter>(IUseAddTodoAdapter, useAddTodoAdapter);
}