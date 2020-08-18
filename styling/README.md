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


<br>

## Styled-Components
