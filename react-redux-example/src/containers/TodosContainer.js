import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({ todos, input, changeInput, insert, toggle, remove }) => {
    return (
        <Todos 
            input={input} 
            todos={todos}
            onChangeInput={text => changeInput(text)}
            onInsert={todo => insert(todo)}
            onToggle={id => toggle(id)}
            onRemove={id => remove(id)}
        />
    )   
};

export default connect(
    ({ todos }) => ({
        todos: todos.todos,
        input: todos.input
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    }
)(TodosContainer);