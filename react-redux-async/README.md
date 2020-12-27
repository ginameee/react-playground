`Reducer은 순수함수` 라는 법칙에따라, reducer안에는 외부의 영향을 받는 비동기작업을 할 수 없다.\
redux 에서 비동기작업을 수행하기위해 middleware를 활용하는데, 이는 미들웨어가 갖고있는 next를 이용해서 redux작업의 흐름을 사용자가 컨트롤할 수 있기 때문이다.\
그리고 비동기 작업의 대표적인 middleware 라이브러리로는 `redux-thunk`와 `redux-saga`가 있다.

# redux-thunk

## thunk란?

특정작업(함수)의 수행을 연기하고 싶을때 사용하는 기법으로,\
특정작업을 return하는 함수를 의미한다.

```javascript
// 하고자하는 작업
const addOne = (x) => x + 1;

// thunk
const addOneThunk = (x) => addOne(x);
const task = addOneThunk(1);

// addOne을 연기시켜 수행
setTimeout(() => {
  const result = task(1);
  console.log(result);
}, 3000);
```

## 원리

> 액션객체생성함수의 변형

1. 액션객체생성함수가 `액션객체를 return` 하는것이 아니라, `thunk를 return` 한다.
2. redux-thunk 미들웨어가 dispatch된 액션의 형태를 검사 (이건 뇌피셜,,)
3. 함수형태일 경우 비동기 작업을 완료 한 후, 결과값을 담은 액션객체를 새로 생성하여 next를 통해 미들웨어로 혹은 리듀서로 넘긴다.

## 구현

- index

```js
...
import ReduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

- modules

```js
...
import { handleActions } from "redux-actions";

const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

export const getPost = (id) => async (dispatch) => {
  try {
    const response = await api.getPost(id);
    dispatch({ type: GET_POST_SUCCESS, payload: response.data });
  } catch (e) {
    throw e;
  }
};

const initialState = {
  post: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => {
      return {
        ...state,
        post: action.payload,
      };
    },
  },
  initialState
);

export default sample;
```

# redux-saga

> 액션객체함수를 Generator를 이용한 함수로 구현

```js

```
