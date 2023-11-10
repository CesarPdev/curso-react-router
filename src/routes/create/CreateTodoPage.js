import React from 'react'
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function CreateTodoPage() {

  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label='Qué vamos a hacer?'
      submitText='Añadir'
      submitEvent={addTodo}
    />
  )
}

export default CreateTodoPage