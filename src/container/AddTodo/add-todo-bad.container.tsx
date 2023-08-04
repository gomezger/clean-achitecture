import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { height, width } from '../../constants/Dimensions';
import { Input } from '../../components/Input';
import { Button, TypeButton } from '@core/button';
import { Text, TextVariant } from '@core/text';
import { Todo } from './core/domain/todo.domain';
import { DateTime } from 'luxon';
import { TodoModule } from '../../utils/NativeModule';
import { TypeToast, showToast } from '@core/toast';

export const AddTodo = () => {
  const [todo, setTodo] = useState<Partial<Todo>>({});
  const [loading, setLoading] = useState(false);

  const onHandle = async (): Promise<void> => {
    setLoading(false);

    try{
      const todoValidated = validate(todo);
      if(todoValidated !== null){
        await TodoModule.save(
          todoValidated.title,
          todoValidated.date.toSeconds().toString(),
          todoValidated.details ?? '',
        );
      }
    }catch(error){
      showToast(TypeToast.ERROR, 'Error', 'Ocurrió un error al guardar el recordatorio');
    }
    
    setLoading(true);
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

  return (
    <ScrollView style={styles.container}>
      <Text variant={TextVariant.H1} style={styles.title}>{'Guardar Recordatorio'}</Text>

      <Input
        onChange={(title: string) => { setTodo({ title }) }}
        label={'Título'}
        style={styles.input}
        editable={!loading}
      />
      <Input
        onChange={(date: string) => { setTodo({ date: DateTime.fromFormat(date, 'dd/mm/yyyy') }) }}
        label={'Fecha'}
        style={styles.input}
        editable={!loading}
      />
      <Input
        onChange={(details: string) => { setTodo({ details }) }}
        label={'Descripción'}
        style={styles.input}
        editable={!loading}
      />
      {
        loading
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
    paddingTop: height * 0.02,
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
