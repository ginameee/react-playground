# useReducer

redux의 reducer를 편리하게 사용하기 위해 고안된 hook

## 사용방법

1. 액션정의
2. 리듀서정의
3. useReducer hook 사용
4. dispatch 를 통한 state update

```js
import React, { useReducer } from "react";

// 1. 액션 정의
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 2. 리듀서 정의
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}

const Counter = () => {
  // 3. useReducer 수행 ( 1 -> reducer , 2 -> initalState )
  const [state, dispatch] = useReducer(reducer, { number: 0 });
  return (
    <div>
      <p>현재 카운터값은 {state.number} 입니다.</p>
      <button
        onClick={() => {
          // 3. dispatch를 통한 state update
          dispatch({ type: INCREMENT });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
```

## 장점

1. 하나의 component state값 마다 useState를 사용해야했던 번거로움이,\
   state를 redux의 state로 분리하고 관리함으로써 편리해진다.

2. 매번 onChange Callback을 정의해야했던 번거로움이,\
   redux의 dispatch를 범용적으로 사용함으로써 편리해진다.

3. state를 변경하는 로직이 외부의 reducer함수로 분리됨에 따라, 비지니스로직과 표현로직의 관심사가 분리된다.
   즉, 컴포넌트는 뿌리는 것만 신경쓰면 된다.

```js
/*
 * useState
 */
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const onChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const onChangeNickname = ({ target: { value } }) => {
    setNickname(value);
  };
  return (
    <>
      <div>
        <input type="text" value={name} onChange={onChangeName}></input>
        <input type="text" value={nickname} onChange={onChangeNickname}></input>
      </div>
      <p>
        name: {name} <br />
        nickname: {nickname}
      </p>
    </>
  );
};

/*
 * useReducer
 */
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });

  const onChange = (e) => {
    console.dir(e.target);
    dispatch(e.target);
  };

  return (
    <>
      <div>
        <input type="text" name="name" value={name} onChange={onChange}></input>
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        ></input>
      </div>
      <p>
        name: {name} <br />
        nickname: {nickname}
      </p>
    </>
  );
};
```

## 꿀팁

### 폼에서 비지니스로직을 여러액션이 공유할 수 있는 방법

e.target의 name을 액션으로 사용하면,\
액션별 비지니스로직을 추가하지 않고, 하나의 비지니스로직을 여러 액션이 공용으로 사용할 수 있다.

```js
//
// 1. 액션 정의
const NAME = "name";
const NICKNAME = "nickname";

// 2. 리듀서 정의
function reducer(state, action) {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.value
      };
    case NICKNAME:
      return {
        ...state,
        nickname: action.value,
      };
    default:
      return state;
  }
}

//.. 컴포넌트 정의 중략..
return (
    <>
      <div>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {dispatch({ type: 'name', value: e.target.value })}/>
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={(e) => {dispatch({ type: 'nickname', value: e.target.value })}/>
      </div>
      <p>
        name: {name} <br />
        nickname: {nickname}
      </p>
    </>
);

//
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

//.. 컴포넌트 정의 중략..
return (
    <>
        <div>
        <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {dispatch(e.target)})}
        />
        <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={(e) => {dispatch(e.target)})}
        />
        </div>
        <p>
        name: {name} <br />
        nickname: {nickname}
        </p>
    </>
);
```
