import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
    console.log("평균값 계산 중...");

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((a, b) => a + b);
    console.log();
    return sum / numbers.length;
};


const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(({ target: { value } }) => {
        setNumber(value);
    }, []);

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('')
    }, [number, list])

    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <div>
                <input type="number" value={number} onChange={onChange}></input>
                <button onClick={onInsert}>등록</button>
            </div>
            <ul>
                {
                    list.map(
                        (n, idx) => <li key={idx}>{n}</li>
                    )
                }
            </ul>
            <div>
                <b>평균값</b> {avg}
            </div>

        </div>
    );
}

export default Average;