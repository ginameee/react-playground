import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = new Array(2500).fill(0).map(
    (foo, idx) => {
        return {
            id: idx,
            text: `일정 ${idx}`,
            done: false
        }
    }
);

class App extends Component {
    state = {
        input: '',
        todos: initialTodos
    };

    id = this.state.todos.length;
    getId = () => {
        return ++this.id
    };

    handleChange = (e) => {
        const { value } = e.target;

        this.setState({
            input: value
        });
    };

    handleInsert = () => {
        const { todos, input } = this.state;

        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        }

        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    };

    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index + 1, todos.length)
            ]
        });
    };


    handleRemove = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex((todo) => todo.id === id);

        todos.splice(index, 1);

        this.setState(
            {
                todos: [...todos]
            }
        );
    };

    render() {
        const { input, todos } = this.state;
        const { handleChange, handleInsert, handleToggle, handleRemove } = this;

        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
            </PageTemplate>
        )
    }
}

export default App;