`Reducer은 순수함수` 라는 법칙에따라, reducer안에는 외부의 영향을 받는 비동기작업을 할 수 없다.\
redux 에서 비동기작업을 수행하기위해 middleware를 활용하는데, 이는 미들웨어가 갖고있는 next를 이용해서 redux작업의 흐름을 사용자가 컨트롤할 수 있기 때문이다.\
그리고 비동기 작업의 대표적인 middleware 라이브러리로는 `redux-thunk`와 `redux-saga`가 있다.

# redux-thunk

`함수 형태의 액션(thunk)`을 dispatch한다.
그리고 redux-thunk 마들웨어에서 해당 함수(thunk)에 스토어의 dispatch와 getState를 제공하고,
thunk 에서 비동기 작업을 수행한 후, 미들웨어로부터 제공받은 dispatch, getState를 이용하여 reducer에게 액션객체를 생성/전달한다.

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

1. 액션객체생성함수가 `액션객체를 return` 하는것이 아니라, `함수(thunk)를 return` 한다.
2. ~~redux-thunk 미들웨어가 dispatch된 액션의 형태를 검사 (이건 뇌피셜,,)~~
3. 함수형태일 경우 비동기 작업을 완료 한 후, 결과값을 담은 액션객체를 새로 생성하여 next를 통해 미들웨어로 혹은 리듀서로 넘긴다.

## 구현

1. redux-thunk 설치

```shell
npm i redux-thunk
```

2. 미들웨어 적용

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

3. 액션생성함수 정의 (thunk를 리턴)

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

제네레이터를 기반으로, 디스패치하는 액션을 모니터링해서 필요한 작업을 수행한다.

특정 액션에 동작할 제네레이터를 정의/동록하고,\
redux-saga 미들웨어가 등록된 액션에 대한 제네레이터를 동작시킨다.

제네레이터 함수는 redux-saga가 제공하는 함수들을 이용해,
비동기작업을 정의/수행, reducer에게 액션객체를 전달한다.

## 제네레이터

- 기본 원리

```js
// 제네레이터 함수
function* sumGenerator() {
  console.log("제네레이터가 생성되었습니다.");
  yield "start!";
  let a = yield;
  let b = yield;
  yield a + b;
}

// 제네레이터 생성
const sum = sumGenerator();

// 실행
sum.next();
// 제네레이터가 생성되었습니다.
// { value: 'start!', done: false }

sum.next(1);
// { value: undefined, done: false }

sum.next(2);
// { value: undefined, done: false }

sum.next();
// { value: 3', done: false }

sum.next();
// { value: undefined, done: true }
```

- saga에서 사용하는 패턴

```js
function* watchGenerator() {
  console.log("모니터링 중...");

  let prevAction = null;

  while (true) {
    const action = yield;
    consle.log("이전 액션: ", prevAction);
    prevAction = action;

    switch (action.type) {
      case "HELLO":
        console.log("안녕하세요");
        break;
      case "BYE":
        console.log("안녕히가세요");
        break;
    }
  }
}

const watch = watchGenerator();

watch.next(); // 모니터링 중 ..,  { value: undefined, done: false }
watch.next({ type: "TEST" }); // 이전 액션: null, { value: undefined, done: false }
watch.next({ type: "HELLO" }); // 이전 액션: TEST, 안녕하세요, { value: undefined, done: false }
watch.next({ type: "BYE" }); // 이전 액션: HELLO, 안녕히가세요, { value: undefined, done: false }
```

## 원리

> 특정액션에 대한 saga(=generator 생성함수)를 등록

특정액션이 들어왔을 때, 동작할 saga를 정의/등록 시켜놓는다.\
saga 안에서는 비동기작업을 수행하고,\
thunk과 동일하게 액션객체를 dispatch하여 reducer에게 전달한다.

이후 redux-saga middleware를 run 하는 순간,\
등록해놓은 saga를 통해 generator를 생성하고 이를 통해 들어오는 action을 감시한다.

## vs redux-thunk

thunk보다 더 다양한 기능을 제공하는데, 대표적으로 다음과 같은 경우에 유용하다

- 기존 요청에 대한 취소
- 웹소켓 사용
- API 요청 실패 시 재요청

thunk와의 구현상 차이점은,\
`redux-thunk`는 thunk에서 직접 비동기 작업을 정의하고, store의 dispatch를 직접 사용하여 객체를 전달한 반면,\
`redux-saga`는 아래와 같은 다양한 함수들을 제공하여, 쉽고 다양한 기능을 구현할 수 있도록 했다.

다음은 redux-saga에서 제공하는 함수들이며, `yield` 키워드와 함께 사용한다.\
~~각각의 키워드가 동작할 때마다, 해당 함수 내부적으로 next를 호출해서 다음 yield로 넘어가는 것 같다. (뇌피셜)~~

- delay(시간): 일정시간을 기다린다
- put(액션객체): 액션을 디스패치한다
- takeEvery(액션명, saga): 모든 dispatch되는 액션들 중 `액션명`에 대해서, `saga`작업을 수행한다.
- takeLatest(액션명, saga): takeEvery와 비슷하지만, 기존에 진행중이던 작업을 취소하고 가장마지막으로 실행된 작업만 수행한다.
- call(promise를\_return하는\_비동기함수, 비동기함수에넘길\_매개변수): await 키워드와 비슷한 역할로, 비동기함수가 완료될때까지 기다렸다가 resolve로 넘어온 결과값을 return 한다.
- all(\[sagas\]): 여러 saga들을 합쳐주는 역할을 한다.

## 구현

1. redux-saga 설치

```shell
npm i redux-saga
```

2. saga 구현
   1. saga 정의
   2. 정의한 saga들을 액션과 mapping 해주는 module saga 생성

modules/sample.js

```js
...
import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

export getPost = createAction(GET_POST);

/*
  1. saga 정의
*/
function* getPostSaga(action) {
  const id = action.payload;
  const response = yield call(api.getPost, action.id);

  yield put({ type: GET_POST_SUCCESS, payload: response.data })
}

/*
  2. module saga 생성
 */
export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
}

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

4. module saga들을 묶어 rootSaga 생성

modules/index.js

```js
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counterSaga";
import sample, { sampleSaga } from "./sampleSaga";

const rootReducer = combineReducers({
  sample,
  counter,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
```

5. 미들웨어 적용

index.js

```js
...
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";

/*
  1. saga middleware 생성
*/
const sagaMiddleware = createSagaMiddleware();

/*
  2. store에 saga middleware 적용
*/
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

/*
  3. saga middleware 실행
*/
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
