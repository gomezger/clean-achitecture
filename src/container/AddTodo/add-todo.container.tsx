import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { height, width } from '../../constants/Dimensions';
import { Input } from '../../components/Input';
import { Button, TypeButton } from '@core/button';
import { Text, TextVariant } from '@core/text';
import { useAddTodoCase } from './core/case/add-todo.case';
import { Todo } from './core/domain/todo.domain';
import { DateTime } from 'luxon';

export const AddTodo = () => {
  const { save, ...addTodoProps } = useAddTodoCase();
  const [todo, setTodo] = useState<Partial<Todo>>({});

  const onHandle = async (): Promise<void> => {
    await save(todo);
  }

  return (
    <ScrollView style={styles.container}>
      <Text variant={TextVariant.H1} style={styles.title}>{'Guardar Recordatorio'}</Text>

      <Input
        onChange={(title: string) => { setTodo({ title }) }}
        label={'Título'}
        style={styles.input}
        editable={!addTodoProps.loading}
      />
      <Input
        onChange={(date: string) => { setTodo({ date: DateTime.fromFormat(date, 'dd/mm/yyyy') }) }}
        label={'Fecha'}
        style={styles.input}
        editable={!addTodoProps.loading}
      />
      <Input
        onChange={(details: string) => { setTodo({ details }) }}
        label={'Descripción'}
        style={styles.input}
        editable={!addTodoProps.loading}
      />
      {
        addTodoProps.loading
          ? <Text>Cargando...</Text>
          : <Button
            type={TypeButton.fullFill}
            backgroundColor={'#111'}
            onPress={onHandle}
            text={'Guardar'}
          />
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    paddingTop: height*0.02,
    height: height,
    alignSelf: 'center',
  },
  input: {
    marginBottom: height * 0.02,
  },
  title: {
    marginBottom: height * 0.03,
  },
});
