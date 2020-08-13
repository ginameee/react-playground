import React, { Component } from 'react';
import style from './TodoItem.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

class TodoItem extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.done !== nextProps.done;
    }

    render() {
        const { done, children, onToggle, onRemove } = this.props;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly />
                <div className={cx('text', { done })}>{children}</div>
                <div className={cx('delete')} onClick={(e) => { onRemove(); e.stopPropagation(); }}>[지우기]</div>
            </div>
        )
    }
}

export default TodoItem;