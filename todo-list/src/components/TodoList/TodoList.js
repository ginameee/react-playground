import React, { useCallback } from "react";
import { List } from "react-virtualized";
import TodoItem from "../TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];

      return (
        <TodoItem
          key={key}
          done={todo.done}
          onToggle={() => {
            onToggle(todo.id);
          }}
          onRemove={() => {
            onRemove(todo.id);
          }}
          style={style}
        >
          {todo.text}
        </TodoItem>
      );
    },
    [todos, onToggle, onRemove]
  );

  return (
    <List
      className="TodoList"
      width={500} // 리스트 전체높이
      height={513} // 리스트 전체크기
      rowCount={todos.length} // 항목 갯수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목 렌더링 함수
      list={todos} // 항목
      style={{ outline: "none" }} // List 전체에 적용되는 기본 스타일
    ></List>
  );
};

// class TodoList extends Component {
//   render() {
//     const { todos, onToggle, onRemove } = this.props;

//     return (
//   <div>
//     {todos.map((todo) => (
//       <TodoItem
//         key={todo.id}
//         done={todo.done}
//         onToggle={() => {
//           onToggle(todo.id);
//         }}
//         onRemove={() => {
//           onRemove(todo.id);
//         }}
//       >
//         {todo.text}
//       </TodoItem>
//     ))}
//   </div>
//     );
//   }
// }

export default TodoList;
