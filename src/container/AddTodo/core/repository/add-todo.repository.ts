import { TodoModule } from "../../../../utils/NativeModule";

export interface IUseAddTodoRepository {
    save: (title: string, date: number, details: string) => Promise<number>;
}

export const useAddTodoRepository = (): IUseAddTodoRepository => {
    
    const save = async (title: string, date: number, details: string): Promise<number> => {
        return TodoModule.save(title, date, details);
    }

    return {
        save,
    }
}