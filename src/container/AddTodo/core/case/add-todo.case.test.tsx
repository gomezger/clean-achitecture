import { showToast } from "@core/toast";
import { act, renderHook } from '@testing-library/react-native';
import { DateTime } from 'luxon';
import { IUseAddTodoAdapter, Todo, useAddTodoCase } from '..';
import { Builder } from '../../../../test';
import { registerMockDependecy, resolveDependecy } from '../../../../utils/inversionDependecies';

describe('add-todo-case', () => {
    it('invalid date', async () => {
        // prepare
        const builder = new BuilderAddTodo()
            .mockAddTodoAdapterWithSuccess()
            .mockBadDateTodo();
        const { result: { current } } = renderHook(() => useAddTodoCase());

        // act
        let result: boolean | undefined;
        await act(async () => {
            result = await current.save(builder.todo);
        });

        // assert
        expect(showToast).toBeCalledTimes(1);
        expect(result).toBe(false);
        builder.finish();
    })

    it('Error create todo', async () => {
        // prepare
        const builder = new BuilderAddTodo()
            .mockAddTodoAdapterWithError()
            .mockGoodTodo();
        const { result: { current } } = renderHook(() => useAddTodoCase());

        // act 
        let result: boolean | undefined;
        await act(async () => {
            result = await current.save(builder.todo);
        });

        // assert
        expect(showToast).toBeCalledTimes(1);
        expect(result).toBe(false);
        builder.finish();
    })


    it('success case', async () => {
        // prepare
        const builder = new BuilderAddTodo()
            .mockAddTodoAdapterWithSuccess()
            .mockGoodTodo();
        const { result: { current: addTodoCase } } = renderHook(() => useAddTodoCase());

        // act 
        let result: boolean | undefined;
        await act(async () => {
            result = await addTodoCase.save(builder.todo);
        });

        // assert
        expect(showToast).toBeCalledTimes(1);
        expect(result).toBe(true);
        builder.finish();
    })
});

class BuilderAddTodo extends Builder {
    adaptador: IUseAddTodoAdapter;
    todo: Partial<Todo> = {};

    constructor() {
        super();
        this.adaptador = resolveDependecy<IUseAddTodoAdapter>(IUseAddTodoAdapter);
    }

    public mockGoodTodo(): BuilderAddTodo {
        this.todo = {
            date: DateTime.now(),
            details: 'detalles',
            title: 'titulo',
        }
        return this;
    }

    public mockBadDateTodo(): BuilderAddTodo {
        this.todo = {
            date: undefined,
            details: 'detalles',
            title: 'titulo',
        }
        return this;
    }

    public mockAddTodoAdapterWithSuccess(): BuilderAddTodo {
        registerMockDependecy(IUseAddTodoAdapter, {
            save: (_todo: Todo): Promise<void> => {
                return Promise.resolve();
            }
        });
        this.adaptador = resolveDependecy<IUseAddTodoAdapter>(IUseAddTodoAdapter);
        return this;
    }

    public mockAddTodoAdapterWithError(): BuilderAddTodo {
        registerMockDependecy(IUseAddTodoAdapter, {
            save: (_todo: Todo): Promise<void> => {
                throw new Error('Error al guardar el recodatorio')
            }
        });
        return this;
    }


}
