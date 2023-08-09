import {ResponseFetch} from '@core/fetch-api';
import {Todo} from '../domain/todo.domain';

export interface IUseAddTodoRepository {
  /**
   * Guarda el todo
   * @param title - titulo de todo
   * @param date - fecha en formato ISO8601
   * @param details - detalles del todo
   * @returns retorna {@link ResponseFetch} con el resultado de la búsqueda
   */
  save: (
    title: string,
    date: string,
    details: string,
  ) => Promise<ResponseFetch<number, Todo>>;
}

export const useAddTodoRepository = (): IUseAddTodoRepository => {
  const save = async (
    title: string,
    date: string,
    details: string,
  ): Promise<ResponseFetch<number, Todo>> => {
    // const result = await fetchApi<number, Todo>({
    //     url: 'https://api-rest.com/api/v1/todos',
    //     method: Method.POST,
    //     body: {
    //         title,
    //         date,
    //         details,
    //     },
    // });
    // return result;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: 4,
          status: 200,
          statusText: 'OK',
          timeout: false,
        });
      }, 3000);
    });
  };

  return {
    save,
  };
};
