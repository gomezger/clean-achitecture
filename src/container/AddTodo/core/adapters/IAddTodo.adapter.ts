import { Todo } from "../domain/todo.domain";

export interface IUseAddTodoAdapter {
    /**
     * Recibe un todo y adapta al repositorio que se esté utilizando
     * @param todo - {@link Todo} 
     */
    save: (todo: Todo) => Promise<void>;
}