# Ducks 파일구조
기존에 분리되어있던 redux 관련 파일구조를 하나로 합친 구조, <br>
기존에 액션을 추가/수정/삭제할 경우 3개의 파일을 수정해야 하는 불편함을 줄이고자 고안
<br>

## 규칙
- reducer는 ``export default``
- action생성 함수는 ``export``
- action type 이름은 ``{reducer_name}/{action_type_name}``

---
## Not using Ducks vs Using Ducks

### 기존방식
- Action Type 상수 파일 ex. ``actions/actionTypes.js``
```javascript
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
```

<br>

- Actions 생성 함수 파일 ex. ``actions/index.js``
```javascript
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

<br>

- Reducer 파일 ex. ``reducers/index.js``
```javascript
import * as types from '../actions/ActionTypes';

const initialState = {
    data: {}
};


function reducer(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return state
        case types.DECREMENT:
            return state
        default:
            return state;
    }
}

export default reducer;
```


<br><br>

### Ducks 방식
- 하나의 파일
```javascript
// 1. action type 정의  (name rule 준수)
export const INCREMENT = 'reducer/INCREMENT';
export const DECREMENT = 'reducer/DECREMENT';

// 2. action 생성 함수 정의 (export)
export const increment = (index) => ({
    type: INCREMENT,
    index
});

export const decrement = (index) => ({
    type: DECREMENT,
    index
});


// 3. intial State 정의
const initialState = {
    data: {}
};

// 4. reducer 정의 (export default)
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return state
        case types.DECREMENT:
            return state
        default:
            return state;
    }
}
```

