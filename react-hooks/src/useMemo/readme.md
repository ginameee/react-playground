# useMemo
```javascript
const result = React.useMemo(new Function(), new Array())
```

rerender 시,<br>
render 함수만 재호출 하는 클래스 컴포넌트와 다르게, <br>
함수형 컴포넌트는 코드 전체가 재호출 된다.
이에 따라 재호출이 필요하지 않은 함수까지 재수행 되는 경우가 있는데 이를 막고자 고안됐다.

Memo는 <br>
최초에 1번재 파라미터의 결과값을 저장해 놓았다가 <br>
2번째 파라미터 배열의 원소값이 변하기 전까지 1번째 파라미터 함수를 수행하지 않는다.


