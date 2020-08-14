rerender 시,<br>
render 함수만 재호출 하는 클래스 컴포넌트와 다르게, <br>
함수형 컴포넌트는 코드 전체가 재호출 된다.
이에 따라 재호출이 필요하지 않은 함수까지 재수행 되는 경우가 있는데 이를 막고자 고안됐다.


# useMemo
```javascript
const result = React.useMemo(new Function(), new Array())
```

useMemo는 <br>
최초에 1번재 파라미터인 ``함수의 return값을 변수(result)에 저장``해 놓았다가 <br>
2번째 파라미터인 배열의 원소들의 값이 변하기 전까지 1번째 파라미터 함수를 재수행하지 않는다.

<br>

# useCallback

```javascript
const result = React.useCallback(new Function(), new Array())
```

useCallback은 <br>
최초에 1번재 파라미터인 ``함수를 변수(result)에 저장``해 놓았다가 <br>
2번째 파라미터 배열의 원소값이 변하기 전까지 1번째 파라미터 함수를 생성하지 않는다.

2번째 파라미터인 배열에는, <br>
순수 함수의 경우에는 최초 한번 생성 후 재사용하면 되기때문에 ``빈배열값을 넣는다``. <br>
그러나 컴포넌트 내부 변수에 의존하거나 하는 함수의 경우, 의존하는 변수의 값이 변경됬을 때마다 재생성 되어야 하므로,<br> 의존되는 ``변수들을 배열에 넣는다``.