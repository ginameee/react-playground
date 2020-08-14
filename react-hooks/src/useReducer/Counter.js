import React, { useReducer } from 'react';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { number: 0 });
    return (
        <div>
            <p>
                현재 카운터값은 {state.number} 입니다.
            </p>
            <button onClick={() => { dispatch({ type: INCREMENT }) }}>+</button>
            <button onClick={() => { dispatch({ type: DECREMENT }) }}>-</button>
        </div>
    );
}

export default Counter;