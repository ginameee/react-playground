import { handleActions, createAction } from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const THUNK_TEST = 'THUNK_TEST';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const thunkTest = () => {
    console.log('thunkTest');
    return (dispatch) => {
        return {
            type: THUNK_TEST
        }
    }
}

// export const thunkTest = () => {
//     console.log('thunkTest');
//     return {
//         type: THUNK_TEST
//     }
// }


export default handleActions({
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1,
    [THUNK_TEST]: (state, action) => { console.log('TEST'); return state; }
}, 0);