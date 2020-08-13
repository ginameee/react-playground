import { Map, List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List(
    [
        Map({
            id: 0,
            text: '리액트 공부하기',
            done: true
        }),
        Map({
            id: 1,
            text: '컴포넌트 스타일링 해보기',
            done: false
        }),
    ]
);

export default handleActions(
    {
        [INSERT]: (state, action) => {
            const { id, text, done } = action.payload;

            return state.push(Map({ id, text, done }));
        },
        [TOGGLE]: (state, action) => {
            const { payload: index } = action;

            return state.updateIn([index, ['done']], done => !done);
        },
        [REMOVE]: (state, action) => {
            const { payload: index } = action;

            return state.delete(index);
        }
    },
    initialState
);