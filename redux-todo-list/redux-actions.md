# redux-actions
redux action을 편리하게 관리하기 위한 패키지 <br>

## createAction
```javascript
const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

// basic
export const increment = (data) => {
  return {
    type: actionTypes.INCREMENT,
    payload: data
  }
}

// createAction
import { createAction } from 'react-actions';

export const increment = createAction(actionTypes.INCREMENT);
```

## handleAction
```javascript
const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

const initialState = {
  number: 0
};


/* 
  #### basic ####
  function scope가 reducer 함수이고,
  block scope가 switch 문이기 때문에,
  각각 다른케이스에서 같은 이름의 변수를 사용할 수 없다.
*/
function reducer (state = initialState, action) {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        number: state.number + action.value
      }
      break;
    case actionTypes.DECREMENT:
      return {
        ...state,
        number: state.number - action.value
      }
      break;
      
    default:
      return state;
      break;
  }
}

// handleActions
const reducer = handleActions({
  [actionTypes.INCREMENT]: (state, action) => ({
    counter: state.counter + action.payload
  }),
  [actionTypes.DECREMENT]: (state, action) => ({
    counter: state.counter - action.payload
  }),
}, initialState)
```