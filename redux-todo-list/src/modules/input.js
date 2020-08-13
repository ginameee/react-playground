import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// Action Types
// naming rule: {reducer_name}/{action_type_name}
const SET_INPUT = 'input/SET_INPUT';

// Actions
export const setInput = createAction(SET_INPUT);

// Initial State
const initialState = Map({
    value: ''
});

// reducer
export default handleActions(
    {
        [SET_INPUT]: (state, action) => (
            state.set('value', action.payload)
        )
    },
    initialState
);




