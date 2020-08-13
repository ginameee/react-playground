import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};


function counter(state = initialState, action) {
    const { counters } = state;
    const selectedCounter = (!isNaN(action.index)) ? counters[action.index] : null;

    switch (action.type) {
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            }
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            }
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...selectedCounter,
                        number: selectedCounter.number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...selectedCounter,
                        number: selectedCounter.number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...selectedCounter,
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        default:
            return state;
    }
}

export default counter;