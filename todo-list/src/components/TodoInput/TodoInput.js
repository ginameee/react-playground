import React, { useCallback } from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({ value, onChange, onInsert }) => {
    const handleKeyPress = useCallback((e) => {
        if (e.key === 'Entert') {
            onInsert();
        }
    }, [onInsert]);

    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    )
}

export default TodoInput;
