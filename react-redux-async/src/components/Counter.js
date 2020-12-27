import React from 'react';

const Counter = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <p>
                현재 카운터 값은 {number} 입니다.
            </p>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default Counter;
