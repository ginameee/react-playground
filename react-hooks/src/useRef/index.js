import React, { useRef, useState } from 'react';

const useRefApp = () => {
    const [data, setData] = useState('');
    const input = useRef(null);
    const refLocalVal = useRef(5);
    let refVal = 5;

    const onClick = () => {
        refVal++;
        refLocalVal.current = refLocalVal.current + 1;
        console.log('refLocalVal:', refLocalVal.current);
        console.log('refVal:', refVal);
        input.current.focus();
    };

    const onChange = ({ target: { value } }) => {
        setData(value);
    }


    return (
        <div>
            <button onClick={onClick}>Focusing!</button>
            <br></br>
            <input type="text" ref={input} value={data} onChange={onChange} />
        </div>
    );
};

export default useRefApp;