
# combineReducers

Reducer를 모듈화 하고 싶을 때 사용하는 redux의 메소드

---
## 사용방법

1. ### reducer 들 정의
    ### reducer_1: color 
    ```javascript
    import * as types from '../actions/ActionTypes';

    const initialState = {
        color: 'black'
    };


    const color = (state = initialState, action) => {
        switch (action.type) {
            case types.SET_COLOR:
                return {
                    color: action.color
                }
                break;
            default:
                return state;
                break;
        }
    };

    export default color;
    ```
    ### reducer_2: number
    ``` javascript
    import * as types from '../actions/ActionTypes';

    const initialState = {
        number: 0
    };


    const number = (state = initialState, action) => {
        switch (action.type) {
            case types.INCREMENT:
                return {
                    number: state.number + 1
                };
                break;
            case types.DECREMENT:
                return {
                    number: state.number - 1
                };
                break;
            default:
                return state;
                break;
        }
    }


    export default number;
    ```

<br><br>

2. ### 합침
```javascript
import number from './number';
import color from './color';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;
```

<br>
<br>

3. ### 사용
```javascript
const mapReduxStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});
```

