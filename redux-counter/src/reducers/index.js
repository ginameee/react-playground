import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black',
    number: 0
};

function counter(state = initialState, action) {
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
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color
            }
            break;
        default:
            return state;
            break;
    }
}

export default counter;