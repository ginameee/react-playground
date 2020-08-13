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