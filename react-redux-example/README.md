react-redux example (todos, counter)

react 에서 redux를 사용할 때는, react-redux 라는 패키지를 이용한다.

## 사용방법

### Redux

1. Action type(이름)을 정의한다.

```Javascript
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
```

2. Action을 정의한다.\
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

3. Reducer를 정의한다.\
   Action Type별, Action 객체의 데이터를 이용한 로직 작성

```js
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
      break;
    case types.DECREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
      break;
    default:
      return state;
      break;
  }
}

export default reducer;
```

4. Store를 생성한다.

```Javascript
...
import reducers from './reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

// Redux Devtool 사용 시
// const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
```

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

6. Container Component에 연결\
   Container Component는 실제로 화면에 나타날 Presentation Component를 감싸는 컴포넌트

   1. `mapStateToProp` 정의\
      사용하고자 하는 Redux의 State를 Presentation Component에 prop으로 정의

   ```javascript
   const mapReduxStateToProps = (state) => ({
     number: state.number,
   });
   ```

   2. `mapDispatchToProp` 정의

   ```javascript
   import * as actions from "../actions";

   const mapDispatchToProps = (dispatch) => ({
     onIncrement: () => dispatch(actions.increment()),
     onDecrement: () => dispatch(actions.decrement()),
   });
   ```

   3. `connect`메소드를 이용해서 Presentation Component에 연결

   ```javascript
   import Counter from "../components/Counter";
   import { connect } from "react-redux";

   const CounterContainer = connect(
     mapReduxStateToProps,
     mapDispatchToProps
   )(Counter);
   ```

# react-redux hooks

react-redux는 connect 없이, redux의 요소에 접근할 수 있는 hooks을 제공한다.

차이점은 connect를 사용할 경우, 부모컴포넌트에 의한 불필요한 re-rendering을 방지해준다.\
따라서 hooks을 이용할 경우 React.memo를 이용한 성능최적화를 수동으로 해주자.

## useSelector

connect 없이 redux state를 조회하기위해 사용한다.

```js
// use connect
...

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
};

export default connect(
  (state) => ({
    number: state.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);

// use useSelector Hook
...

const CounterContainer = ({ increase, decrease}) => {
    const number = useSelector(state => state.counter.number);

    return (
        <Counter
        number={number}
        onIncrease={increase}
        onDecrease={decrease}
        />
    )
}

export default connect(
    null,
    {
        increase,
        decrease
    }
)(CounterContainer);
```

## useDispatch

connect 없이 redux dispatch를 사용한다.

```js
// use connect
...

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
};

export default connect(
  (state) => ({
    number: state.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);

// use useDispatch Hook
...
import { useDispatch } from 'react-redux';

const CounterContainer = ({ number }) => {
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        />
    )
}

export default connect(
    (state) => ({
        number: state.number,
    }),
    null
)(CounterContainer);
```

## useStore

store 전체를 접근하고싶을때 사용, 거의 사용할일이 없다.

```js
// use connect
...

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
};

export default connect(
  (state) => ({
    number: state.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);

// use useStore Hook
...
import { useStore } from 'react-redux';

const CounterContainer = () => {
    const store = useStore();
    const number = store.getState().number;
    const onIncrease = useCallback(() => store.dispatch(increase()), [store]);
    const onDecrease = useCallback(() => store.dispatch(decrease()), [store]);

    return (
        <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        />
    )
}

export default CounterContainer;
```
