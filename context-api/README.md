외부라이브러리를 사용하자 않고, 전역적으로 상태를 간단히 접근/조작하고 싶을 때 사용하는 API

## 생성

```js
import { createContext } from "react";

const ColorContext = createContext({ color: "black" }); // 초기값 설정

// Provider를 통해 값 설정
function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div className="App">
        <ColorBox></ColorBox>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
```

## 사용

### Consumer

Consumer를 이용하여 context값을 읽어온다. (조작은 불가능)\
Consumer에 children으로 들어있는 렌더링함수(Function as a child or Render Props)에 매개변수로 context값을 넘겨준다.

```js
import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
};

function App() {
  return (
    <div className="App">
      <ColorBox></ColorBox>
    </div>
  );
}

export default App;
```

## vs Redux

단순한 상태관리를 위해서라면 ContextAPI 만 사용해도 충분하다.

Redux는 미들웨어를 제공함으로써, 다양한 형태로 활용/응용이 가능하다.\
가장 대표적인 예로 redux-thunk와 redux-saga를 이용한 비동기 작업이다.

또한 파일이 분리되어있고, 다양한 패턴으로 정형화 되어있기 때문에 유지보수에도 편리하다.

### 결론)

- 단순한 상태정보를 쓰고/읽고싶다면 -> Context API
- 앱의 규모가 크고, 상태의 저장과 다양한 조작/작업이 필요하다면 -> Redux
