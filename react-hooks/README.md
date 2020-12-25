# React Hooks

React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수입니다
함수형 컴포넌트에서도 클래스 컴포넌트의 기능(Life cycle, state 등..)을 사용하기 위해 고안된 기술

- useState
- [useEffect](./src/useEffect/readme.md)
- useReducer
- [useMemo](./src/useMemoCallback/readme.md)
- [useCallback](./src/useMemoCallback/readme.md)
- [useRef](./src/useRef/readme.md)
- custom Hooks

---

## 자잘한 Tip

### 처음 개발시에는 함수마다 로그를 찍어보기

함수형 컴포넌트는 rerendering 할 때 마다 함수 전체가 재실행된다. <br>
따라서 매번 함수를 재생성하거나, 재호출하는 비효율적인 현상이 발생할 수 있다. <br>
`로그를 찍어보고 비효율적인 함수가 있다면, useMemo나 useCallback을 이용하여 최적화하자`

<br>

### Hooks는 선언 순서가 매우 중요하다

hooks는 왠만하면 최상위에서 사용하자 <br>
따라서 다음과 같은 상황은 지양하자

- 조건문안에 hooks를 넣지말자
- 함수나 반복문안에도 왠만하면 사용하지 말자
- useEffect와 같은 조건에 따라 동작하는 함수 안에서 useState 사용하지 말자
- props로 넘겨주는 함수는 useCallback으로 감싸자
- 렌더링되지 않는 정보는 useRef를 사용해도 좋다.
