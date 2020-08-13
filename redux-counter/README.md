# Redux Counter
React-redux, Redux를 이용해서 만든 카운터

---
## 사용기술
- React
- Redux
- React-Redux

---

## Redux의 3가지 규칙

### Store는 단 한개
스토어는 반드시 한개여야 한다. <br>
모듈화를 하고싶다면, [reducer를 여러개를 만든다.](./combineReducers.md) <br>
나눠서 만든 각각의 reducer들은 고유의 state를 갖게되고, <br><br>
Container 컴포넌트에서는 Connect시에, <br>
 ``mapStateToProps``에서 필요한 reducer의 State를 바인딩 함으로써, 불필요한 데이터에 대한 조작을 막을 수 있다. <br>
##### (Action은 정의방식이 그냥 VainilaJS 이므로 객체로 그룹화해서 관리하면 될 듯)
<br>

### State는 읽기 전용
State는 읽기 전용으로 수정이 불가능하다. <br>
Reducer를 통해 State를 변화시킬 때도 기존값에 대한 수정이 아닌,<br> 새로운 객체를 만들어서 대입함으로써 변경한다.

<br>

### Reducer(변화)는 순수함수로 구성
State의 변화는 순수함수를 통해 이루어져야 한다. <br>
이말은 즉, State의 변화를 담당하는 Reducer는 순수함수여야 한다. <br>
순수함수란, <br>

- 같은 입력(파라미터), 같은 출력
- 함수는 파라미터와 내부 선언 변수에만 의존
- 값이 달라지거나, 네트워크 문제가 발생할 수 있는 API 요청은 사용 X
- 마찬가지로 호출시에 값이 달라지는 ``new Date()``나,  ``Math.random()``도 사용 불가

--- 

## 사용 방법
### Redux
1. Action type(이름)을 정의한다.
```Javascript
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
```

<br><br>

2. Action을 정의한다. <br>
Action Type 별 Action 객체를 생성하는 함수를 정의한다.
```Javascript
import * as types from './ActionTypes';

export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});
```
<br><br>

3. Reducer를 정의한다. <br>
Action Type별, Action 객체의 데이터를 이용한 로직 작성
```Javascript
function reducer(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
            break;
        case types.DECREMENT:
            return {
                ...state,
                number: state.number + 1
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer;
```
<br><br>

4. Store를 생성한다.
```Javascript
...
import reducers from './reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

// Redux Devtool 사용 시
// const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
```
<br><br>

### React-Redux

5. react-redux를 이용해서 React App에 Store를 붙인다.
```Javascript
...
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

<br><br>

6. Container Component에 연결 <br>
    Container Component는 실제로 화면에 나타날 Presentation Component를 감싸는 컴포넌트

    1. ``mapStateToProp`` 정의<br>
    사용하고자 하는 Redux의 State를 Presentation Component에 prop으로 정의
    ```javascript
    const mapReduxStateToProps = (state) => ({
        number: state.number
    });
    ```

    2. ``mapDispatchToProp`` 정의 <br>
    ```javascript
    import * as actions from '../actions';

    const mapDispatchToProps = (dispatch) => ({
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement()),
    });
    ```

    3. ``connect``메소드를 이용해서 Presentation Component에 연결 <br>
    ```javascript
    import Counter from '../components/Counter';
    import { connect } from 'react-redux';

    const CounterContainer = connect(
        mapReduxStateToProps,
        mapDispatchToProps
    )(Counter);
    ```

