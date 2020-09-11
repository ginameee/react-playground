# Redux Middleware

## 흐름

```
store.dispatch --> {redux_middleware_1}.next --> {redux_middleware_2}.next --> reducer
```

<br><br>

## 구조 / 정의

```javascript
const myLogger = (store) => (next) => (action) => {
  console.log("현재 상태", store.getState());
  console.log("액션", action);

  // reducer로 action을 넘긴다.
  const result = next(action);

  console.log("다음상태", store.getState());
  console.log("\n");

  return result;
};
```

or

```javascript
const myLogger = function (store) {
  return function (next) {
    return function (action) {
      console.log("현재 상태", store.getState());
      console.log("액션", action);

      // reducer로 action을 넘긴다.
      const result = next(action);

      console.log("다음상태", store.getState());
      console.log("\n");

      return result;
    };
  };
};
```

<br><br>

## 적용

스토어 생성시 applyMiddleware에 파라미터로 추가

```javascript
import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import myLogger from "./lib/myLogger";

const store = createStore(modules, applyMiddleware(myLogger));

export default store;
```
