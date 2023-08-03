import { Todo } from "../domain/todo.domain";
import { useAddTodoRepository } from "../repository/add-todo.repository";

export interface IUseAddTodoAdapter {
    /**
     * Recibe un todo y adapta al repositorio que se esté utilizando
     * @param todo - {@link Todo} 
     */
    save: (todo: Todo) => Promise<void>;
}

export const useAddTodoAdapter = (): IUseAddTodoAdapter => {
    const repository = useAddTodoRepository();
    
    const save = async (todo: Todo): Promise<void> => {
        await repository.save(
            todo.title,
            todo.date.toSeconds().toString(),
            todo.details,
        )
    }

    return { save };
}