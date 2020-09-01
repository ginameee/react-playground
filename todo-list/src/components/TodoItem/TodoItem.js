import React, { Component } from 'react';
import style from './TodoItem.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

const TodoItem = ({ done, children, onToggle, onRemove }) => {
    return (
        <div className={cx('todo-item')} onClick={onToggle}>
            <input className={cx('tick')} type="checkbox" checked={done} readOnly />
            <div className={cx('text', { done })}>{children}</div>
            <div className={cx('delete')} onClick={(e) => { onRemove(); e.stopPropagation(); }}>[지우기]</div>
        </div>
    );
}
// class TodoItem extends Component {
//     // 이놈 때문에 리스트 갱신이 제대로 되지 않았다. 지우지말고 계속 보며 잊지말자 하..
//     // shouldComponentUpdate(nextProps) {
//     //     return this.props.done !== nextProps.done;
//     // }

//     render() {
//         const { done, children, onToggle, onRemove } = this.props;

//         return (
//             <div className={cx('todo-item')} onClick={onToggle}>
//                 <input className={cx('tick')} type="checkbox" checked={done} readOnly />
//                 <div className={cx('text', { done })}>{children}</div>
//                 <div className={cx('delete')} onClick={(e) => { onRemove(); e.stopPropagation(); }}>[지우기]</div>
//             </div>
//         )
//     }
// }

export default React.memo(TodoItem);