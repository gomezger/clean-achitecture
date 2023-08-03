import { TodoModule } from "../../../../utils/NativeModule";

export interface IUseAddTodoRepository {
    /**
     * Guarda el todo
     * @param title - titulo de todo
     * @param date - fecha en formato timestamp
     * @param details - detalles del todo
     * @returns retorna un numero que identifica el todo guardado
     */
    save: (title: string, date: string, details: string) => Promise<number>;
}

export const useAddTodoRepository = (): IUseAddTodoRepository => {
    
    const save = async (title: string, date: string, details: string): Promise<number> => {
        return TodoModule.save(title, date, details);
    }

    return {
        save,
    }
}