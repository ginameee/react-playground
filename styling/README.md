# Styling

컴포넌트 스타일링 방법은 다양하다
- 일반 Css
- Css 전처리기 사용 (sass)
- Css module
- styled-components


---

## 일반 CSS
그냥 쓰면 됨
### 사용
in JS
```javascript
import './{scss_name}.css'
```
in scss/css
```css
@import './{scss_name}.css'
```

<br>

## SASS
최신 create-react-app(>=2.)은 별도의 추가 설정 없이 설치만 하면 사용 가능
### 설치
``` npm i node-sass```

### 사용
in JS
```javascript
import './{scss_name}.scss'
```
in scss/css
```css
@import './{scss_name}.scss'
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
- prependData 옵션 사용
    scss내에서 전역으로 매번 import 해야되는 파일이 있을경우 사용하는 sass-loader의 option으로, <br>
    prependData의 value를 scss/sass 파일 최상단에 추가해준다.
    ```json
    options: {
        prependData: `@import 'utils';`
    }
    ```

<br>

## CSS Module


<br>

## Styled-Components
