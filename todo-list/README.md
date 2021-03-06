# Todo List

기본 실습 프로젝트

---

## 사용 기술

- 리액트

  - Functional Component
  - Class Component

- 스타일링
  - CSS Module
  - SCSS
  - [classnames 모듈](https://www.npmjs.com/package/classnames)

---

## 성능최적화

> 보여줄 항목이 100개 이상이고, 업데이트가 자주 발생한다면 최적화를 진행하자!

<br>

### React.memo

함수형 컴포넌트에서 shouldComponentUpdate or Purecomponent 대신 사용할 수 있는 방법,
사용하는 props의 변화가 없을 경우, update를 하지 않는다.

```js
const TodoItem = ({ done, children, onToggle, onRemove }) => {
  return (
    <div className={cx("todo-item")} onClick={onToggle}>
      ...
    </div>
  );
};

export default React.memo(TodoItem);
```

=> **done. children. onToggle, onRemove 가 변하지 않으면 업데이트하지 않는다.**
<br>
<br>

### useState 함수형 업데이트

일반적으로 useState의 set함수는 새로운 값을 파라미터로 받는다. <br>
useCallback과 사용할 경우, 새로운 값에 기존 state 를 사용할 경우, <br>
기존 state 값이 바뀔때마다 함수 또한 새로고침 되도록 useCallback의 두번째 파라미터 배열에 해당 요소를 추가해주어야 한다. <br>
즉, state가 바뀌면 useCallback의 set함수 또한 갱신이 되는데, <br>
useState의 set함수에 값 대신 함수형 업데이트값을 넣어줌으로써 불필요한 갱신을 막을 수 있다.

```js
// 변경 전(setTodos(값))
const handleInsert = useCallback(
  (e) => {
    const newTodo = {
      text: input,
      done: false,
      id,
    };
    id++;

    setTodos([newTodo, ...todos]);
    setInput("");
  },
  [todos, input]
);

// 변경 후 (setTodos(함수형 업데이트 값))
const handleInsert = useCallback(
  (e) => {
    const newTodo = {
      text: input,
      done: false,
      id,
    };
    id++;

    setTodos((todos) => todos.concat(newTodo));
    setInput("");
  },
  [input]
);
```

<br>
<br>

### react-virtualized

보이는 component만 렌더링 작업을 하여 리소스를 아낀다. <br>

<br>

설치

```
npm i react-virtualized
```

<br>
사용 <br>
보이는 영역을 세팅해주고, 보이는 영역일때 수행 될 render 함수를 정의해준다.

[TodoList.js](./src/components/TodoList/TodoList.js)

```js
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
      style={{ outline: "none" }} // 목록 전체에 적용되는 기본 스타일
    ></List>
  );
};
```

스타일 깨짐 현상 해결 <br>
[TodoItem.js](./src/components/TodoItem/TodoItem.js)

```js
// 1. style prop 추가
// 2. TodoListItem-virtualized 클래스 div wrapper element 추가 & styled prop 적용
const TodoItem = ({ done, children, onToggle, onRemove, style }) => {
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className={cx("todo-item")} onClick={onToggle}>
        <input className={cx("tick")} type="checkbox" checked={done} readOnly />
        <div className={cx("text", { done })}>{children}</div>
        <div
          className={cx("delete")}
          onClick={(e) => {
            onRemove();
            e.stopPropagation();
          }}
        >
          [지우기]
        </div>
      </div>
    </div>
  );
};
```

<br>
<br>
<br>
<br>

####

---

## 알게된 것

### CSS

#### + selector

classA 밑에 classB가 위치한 형태일 때, classB에 대한 스타일을 정의 <br>
li와 같은 리스팅에서 li간의 간격을 조절할 떄 유용하게 사용이 가능

```css
.classA + .classB {
  width: 50px;
  height: 50px;
  background: red;
}
```

```html
<div class="classA">
  <div class="classB"><!-- 배경이 빨간색으로 됨--></div>
</div>
```

<br>

### ShouldComponentUpdate

부모 컴포넌트에서 자식 컴포넌트에게 함수를 props로 넘겨줄 때, <br>
넘겨주는 시점의 독립된 함수객체가 넘어가게 된다.

따라서 넘기는 함수가 내부에서 state값을 사용하는 경우, state값이 변경되었어도<br>
자식 컴포넌트가 update되지 않으면 최신 state가 아닌 넘겨주는 시점의 state 값을 사용하게 된다.

ShouldConentUpdate를 신중하게 사용하자..<br>
이것 때문에 3시간 날렸다 하
<br><br>

### 함수형 컴포넌트가 2번 실행되는 이유

```js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

위처럼 StrictMode사용시 SideEffect Test를 위해, <br>
React가 자체적으로 한번 더 실행하는 것 같다.
dev 모드가 아닌 일반모드로 실행 시 생기지 않는다.
