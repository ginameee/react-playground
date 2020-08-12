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