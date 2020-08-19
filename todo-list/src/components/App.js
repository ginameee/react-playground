import React, { useState, useMemo, useCallback, useEffect } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = new Array(5).fill(0).map(
    (elem, idx) => {
        return {
            id: idx,
            text: `일정 ${idx}`,
            done: false
        }
    }
);

let id = 100;

const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(initialTodos);

    console.log('create!', todos);

    useEffect(
        () => {
            console.log('gg');
        }
    );
    const handleChange = useCallback((e) => {
        const { value } = e.target;
        setInput(value);
    }, []);

    const handleInsert = useCallback((e) => {
        const newTodo = {
            text: input,
            done: false,
            id
        }
        id++

        setTodos([newTodo, ...todos]);
        setInput('');
    }, [todos, input]);


    const handleToggle = useCallback((id) => {
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        setTodos([
            ...todos.slice(0, index),
            toggled,
            ...todos.slice(index + 1, todos.length)
        ]);
    });

    const handleRemove = useCallback((id) => {
        const index = todos.findIndex((todo) => todo.id === id);

        todos.splice(index, 1);

        setTodos([...todos]);
    }, [todos]);


    return (
        <PageTemplate>
            <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
            <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </PageTemplate>
    )
}

export default App;