# useEffect

class의 lifecycle을 대체하기 위해 고안된 hooks 

### 실행 시점
- componentDidMount 때 무조건 수행
- 두번째 파라미터인 배열의 원소값에 변화에 따라서 수행 (특정 변수에 대한 componentDidUpdate 떄 수행)

---

## class lifecycle vs useEffect
class
```javascript
class cComp extends React.Component {
    state = {
        a: 1,
        b: 13
    }

    componentDidMount = () => {
        console.log('gg');
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.a !== state.a) {
            console.log('b is changed');
        } 

        if (prevState.b !== state.b) {
            console.log('b is changed');
        } 
    }
}
```

hooks
```javascript
const cComp = () => {
    const mounted = useRef(false);

    const [ a, setA ] = useState(1);
    const [ b, setB ] = useState(2);

    useEffect(
        () => {
            mounted = true;
            console.log('gg');
        },
        []
    );

    useEffect(
        () => {
            if (mounted.current) {
                console.log('a is changed');
            }
        },
        [ a ]
    );

    useEffect(
        () => {
            if (mounted.current) {
                console.log('b is changed');
            }
        },
        [ b ]
    );
}
```
<br>

### 참고
useEffect는 componentDidMount 때 무조건 한번은 수행된다.

componentDidUpdate 때 만 수행할 수 있도록 하기위해,<br>
``useRef에 mount 여부를 저장``하고, 
이 상태값을 이용하여 ``useEffect 안에서 분기``를 태운다.

---
