import React, { useCallback, useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TODO_APP_STORAGE_KEY = "TODO_APP";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodos(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // high light todo
  const onHighLight = useCallback((id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? (todo.isHighLight === false ? { ...todo, isHighLight: true } : { ...todo, isHighLight: false }) : todo
      )
    );
  }, []);

  return (
    <>
      <h1>Danh sách công việc cần làm</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        onHighLight={onHighLight}
      />
    </>
  );
}

export default TodoList;
