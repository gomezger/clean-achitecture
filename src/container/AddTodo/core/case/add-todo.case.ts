import {TypeToast, showToast} from '@core/toast';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {NavigationProps} from '../../../../App';
import {resolveDependecy} from '../../../../utils/inversionDependecies';
import {IUseAddTodoAdapter} from '../adapters/IAddTodo.adapter';
import {Todo} from '../domain/todo.domain';

export interface IUseAddTodoCase {
  /**
   * Guarda un Todo. Muestra Toast por pantalla
   * @param todo - datos almacenados en el formulario
   * @returns retornar ture si se guardo, falso caso contrario
   */
  save: (todo: Partial<Todo>) => Promise<boolean>;

  /**
   * Estado de save.
   * @example es true si save se está ejecutando, false caso contrario
   */
  loading: boolean;
}

export const useAddTodoCase = (): IUseAddTodoCase => {
  const [loading, setloading] = useState(false);
  const adapter = resolveDependecy<IUseAddTodoAdapter>(IUseAddTodoAdapter);
  const {goBack} = useNavigation<NavigationProps>();

  const save = async (todo: Partial<Todo>): Promise<boolean> => {
    setloading(true);
    try {
      const todoToSave = validate(todo);
      if (todoToSave) {
        await adapter.save(todoToSave);
        showToast(TypeToast.SUCCESS, 'Recordatorio Guardardo', '');
        goBack();
        setloading(false);
        return true;
      }
    } catch (error) {
      showToast(TypeToast.ERROR, 'Error', 'Error al crear recordatorio');
    }
    setloading(false);
    return false;
  };

  const validate = (todo: Partial<Todo>): Todo | null => {
    if (todo.title === undefined) {
      showToast(TypeToast.ERROR, 'Error', 'Ingrese el título');
      return null;
    } else if (todo.date == undefined || !todo.date.isValid) {
      showToast(TypeToast.ERROR, 'Error', 'Ingrese la fecha');
      return null;
    } else if (todo.details === undefined) {
      showToast(TypeToast.ERROR, 'Error', 'Ingrese la fecha');
      return null;
    }
    return {
      title: todo.title,
      date: todo.date,
      details: todo.details,
    };
  };

  return {
    save,
    loading,
  };
};
