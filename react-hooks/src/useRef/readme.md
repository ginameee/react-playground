# useRef
dom을 참조하는 변수 

### 용도
- dom에 접근하고 싶을 떄
- 렌더링에 상관없이 내부적으로 사용하는 변수를 선언하고 싶을 떄

### vs class component
class
```javascript
class cComp extends React.component {
    input

    onClick = () => {
        input.focus();
    }

    render() {
        <>
            <button onClick={this.onClick}>focus</button>
            <input ref={(ref) => { this.input = ref }}/>
        </>
    }
}
```

```javascript
const fComp = () => {
    const input = useRef(null);

    const onClick = () => {
        input.current.focus();
    }

    return (
        <>
            <button onClick={onClick}>focus</button>
            <input ref={(ref) => { this.input = ref }}/>
        </>
    )
}
```

