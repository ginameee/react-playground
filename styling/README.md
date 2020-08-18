# Styling

컴포넌트 스타일링 방법은 다양하다
- [일반 Css](https://github.com/ginameee/react-playground/tree/master/styling#%EC%9D%BC%EB%B0%98-css)
- [Css 전처리기 사용 (sass)](https://github.com/ginameee/react-playground/tree/master/styling#sass)
- [Css module](https://github.com/ginameee/react-playground/tree/master/styling#css-module)
- [styled-components](https://github.com/ginameee/react-playground/tree/master/styling#styled-components)


---

## 일반 CSS
그냥 쓰면 됨
### 사용
in JS
```javascript
import './{scss_name}.css';
```
in scss/css
```css
@import './{scss_name}.css';
```

<br>

## SASS
최신 create-react-app(>=2.)은 별도의 추가 설정 없이 설치만 하면 사용 가능
### 설치
``` npm i node-sass```

### 사용
in JS
```javascript
import './{scss_name}.scss';
```
in scss/css
```css
@import './{scss_name}.scss';
```

<br>

### Tip
- **mixin이나 전역변수는 별도의 파일로 빼서 저장**
    ex)
    - mixin - styles/util
    - 변수 - styles/_variables
- **includePaths 옵션 사용**

    경로가 복잡해질 경우 사용하는 node-sass의 option으로, <br> scss import시 지정된 path를 prefix로 추가해준다.
    ```json
    options: {
        sassOptions: {
            includePaths: [paths.appSrc + '/styles']
        }
    }
    ```
- **prependData 옵션 사용**

    scss내에서 전역으로 매번 import 해야되는 파일이 있을경우 사용하는 sass-loader의 option으로, <br>
    prependData의 value를 scss/sass 파일 최상단에 추가해준다.
    ```json
    options: {
        prependData: `@import 'utils';`
    }
    ```
- **library 에서 불러오기**

    UI 개발 시 유용하게 사용할 수 있는 라이브러리를 가져다가 사용할 수도 있다.
    - [open-color](https://www.npmjs.com/package/open-color): 색상팔레트
    - [include-media](https://www.npmjs.com/package/include-media): 반응형을 쉽게 만들어줌

    ####  설치
    ```
    npm i open-color include-media
    ```

    #### 사용
    ```scss
    @import '~include-media/dist/include-media';
    @import '~open-color/open-color';
    ```

<br>

## CSS Module
javascript에서 CSS를 마치 moudle처럼 불러와 사용하는 방식으로 <br>
클래스 이름의 앞/뒤에 부가적인 정보를 붙여서 다른컴포넌트와의 클래스명 중복을 방지해준다.

### 정의
```css
.wrapper {
    background: black;
    padding: 1rem;
    color: white;
    font-size: 2rem;
}

/** 글로벌 CSS는 앞에 :global을 붙여준다. */
:global .something {
    font-weight: 800;
    color: aqua
}
```

### 사용
```javascript
import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={styles.[클래스_이름]}>
            안녕하세요! 저는 <span className="something">CSS Module!</span>
        </div>
    )
}
```

### Tip
[classname](https://www.npmjs.com/package/classname) 패키지를 사용하면 조건부 클래스명이 가능해져셔 스타일링이 편해진다.

<br>

## Styled-Components
CSS-in-JS을 사용하기 위한 라이브러리 중 하나 <br>
별도의 .css / .scss  파일을 만들지 않아도 된다는 장점이 있다.

#### 설치
```
npm i styled-components
```

#### 사용
[파일 소스 참고](./src/using-styled-components/StyledComponents.js)

엘리먼트 스타일링
```javascript
import styled from 'styled-components';
const ex = styled.div`
    background: gray
`;

const exComp = () => <ex><ex>;
```

컴포넌트 스타일링
```javascript
import styled from 'styled-components';
import MyComp from '@/components/MyComp';

const StyledMyComp = styled(MyComp)`
    color: blue
`;

const exComp = () => <StyledMyComp><StyledMyComp>;
```

#### Tip
- vscode-styled-components 

    VSCODE의 익스텐션으로, styled-components 문법이 단순한 문자열이 아닌 css문법으로 인식하게끔 해준다.
