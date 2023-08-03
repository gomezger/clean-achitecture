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
        const result = await repository.save(
            todo.title,
            todo.date.toISODate() ?? '',
            todo.details,
        )
        if(result.status !== 200 ){
            throw new Error('Error al guardar el recodatorio')
        }
    }

    return { save };
}