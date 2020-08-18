import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {




    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                {
                    todos.map(
                        (todo) => (
                            
                        )
                    )
                }
            </div>
        )
    }
}

export default TodoList;