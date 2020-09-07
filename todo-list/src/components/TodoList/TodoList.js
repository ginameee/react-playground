import React, { Component } from "react";
import TodoItem from "../TodoItem";

class TodoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            done={todo.done}
            onToggle={() => {
              onToggle(todo.id);
            }}
            onRemove={() => {
              onRemove(todo.id);
            }}
          >
            {todo.text}
          </TodoItem>
        ))}
      </div>
    );
  }
}

export default TodoList;
