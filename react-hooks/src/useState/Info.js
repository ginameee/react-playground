import React, { useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickname}></input>
            </div>
            <div>
                <b>이름:</b>{name} <br></br>
                <b>닉네임:</b>{nickname}
            </div>
        </div>
    );
}

export default Info;