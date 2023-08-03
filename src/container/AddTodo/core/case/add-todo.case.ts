import { useAddTodoAdapter } from "../adapters/add-todo.adapter";
import { useState } from "react";
import { TypeToast, showToast } from "@core/toast";
import { Todo } from "../domain/todo.domain";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../../../../App";

export interface IUseAddTodoCase {
    /**
     * Guarda un Todo
     * @param todo - datos almacenados en el formulario
     */
    save: (todo: Partial<Todo>) => Promise<void>;
    loading: boolean;
}

export const useAddTodoCase = (): IUseAddTodoCase => {
    const [loading, setloading] = useState(false)
    const adapter = useAddTodoAdapter();
    const { goBack } = useNavigation<NavigationProps>();

    const save = async (todo: Partial<Todo>): Promise<void> => {
        setloading(true);
        try {
            const todoToSave = validate(todo);
            if(todoToSave){
                await adapter.save(todoToSave);
                showToast(TypeToast.SUCCESS, 'Recordatorio Guardardo', '');
                goBack();
            }
        } catch (error) {
            showToast(TypeToast.ERROR, 'Error', 'Error al crear recordatorio');
        }
        setloading(false);
    }

    const validate = (todo: Partial<Todo>): Todo | null => {
        if (todo.title === undefined) {
            showToast(TypeToast.ERROR, 'Error', 'Ingrese el título');
            return null;
        } else if (todo.date == undefined || !todo.date.isValid) {
            showToast(TypeToast.ERROR, 'Error', 'Ingrese la fecha');
            return null;
        } else if (todo.details === undefined){
            showToast(TypeToast.ERROR, 'Error', 'Ingrese la fecha');
            return null;
        }
        return {
            title: todo.title,
            date: todo.date,
            details: todo.details,
        };
    }

    return {
        save,
        loading,
    }
}