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