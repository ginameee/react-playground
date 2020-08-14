import React, { useReducer } from 'react';

function reducer(state, action) {
    ;
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
    const { name, nickname } = state;

    const onChange = (e) => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input type="text" value={name} name="name" onChange={onChange}></input>
                <input type="text" value={nickname} name="nickname" onChange={onChange}></input>
            </div>
            <div>
                <b>이름:</b>{name} <br></br>
                <b>닉네임:</b>{nickname}
            </div>
        </div>
    );
}

export default Info;