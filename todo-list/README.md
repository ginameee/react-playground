# Todo List
기본 실습 프로젝트

---

## 사용 기술
- 리액트
    - Functional Component
    - Class Component

- 스타일링
    - CSS Module
    - SCSS
    - [classnames 모듈](https://www.npmjs.com/package/classnames)


---

## 잡다하게 알게된 것 
### CSS
#### + selector
classA 밑에 classB가 위치한 형태일 때, classB에 대한 스타일을 정의 <br>
li와 같은 리스팅에서 li간의 간격을 조절할 떄 유용하게 사용이 가능
```css
.classA + .classB {
    width: 50px;
    height: 50px;
    background: red;
}
```
```html
<div class="classA">
<div class="classB"> <!-- 배경이 빨간색으로 됨-->
```
<br>

### ShouldComponentUpdate
부모 컴포넌트에서 자식 컴포넌트에게 함수를 props로 넘겨줄 때, <br>
넘겨주는 시점의 독립된 함수객체가 넘어가게 된다.

따라서 넘기는 함수가 내부에서 state값을 사용하는 경우, state값이 변경되었어도<br>
자식 컴포넌트가 update되지 않으면 최신 state가 아닌 넘겨주는 시점의 state 값을 사용하게 된다.

ShouldConentUpdate를 신중하게 사용하자..<br>
이것 때문에 3시간 날렸다 하