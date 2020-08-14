import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = ({ target: { value } }) => {
        setName(value);
    };

    const onChangeNickname = ({ target: { value } }) => {
        setNickname(value);
    };

    useEffect(
        () => {
            console.log('마운트 될때만 실행됩니다.');
            return () => {
                console.log('언마운트 될때만 실행됩니다.');
            }
        }, []
    );

    useEffect(
        () => {
            console.log('마운트 될 때와, name이 변경될 때만 실행됩니다.', name);
            return () => {
                console.log('name이 바뀌어서 새로운 렌더링이 될때입니다.');
            }
        }, [name]
    );


    return (
        <>
            <div>
                <input type="text" value={name} onChange={onChangeName}></input>
                <input type="text" value={nickname} onChange={onChangeNickname}></input>
            </div>
            <p>
                name: {name} <br />
                nickname: {nickname}
            </p>
        </>
    );
}

export default Info;