import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.done}/>
            <span>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    )
}

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={input} onChange={e => onChangeInput(e.target.value)}/>
                <button type="submit">등록</button>
            </form>
            <div>
                {
                    todos.map(todo => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            onToggle={onToggle}
                            onRemove={onRemove}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Todos;