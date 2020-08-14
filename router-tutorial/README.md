# React Router Tutorial
React Router 연습

## 사용
1. react-rotuer-dom 설치
``` 
npm i react-router-dom
```
<br>

2. Router Component App에 장착
```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```
<br>

3. Path 별 컴포넌트 설정
```javascript
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
    return (
        <div>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/about" component={About}></Route>
        </div>
    );
}

export default App;
```
<br>

5. Link 설정
```javascript
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
            </ul>
            <hr></hr>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/about" component={About}></Route>
        </div>
    );
}

export default App;
```

---

## URL 파라미터 & 쿼리

### 동적라우팅
1. 선언
```html
    <Route path="/profile/:username" component={Profile}></Route>
```

2. 사용 <br>
``props.match.params[동적path_이름]``으로 접근 한다.
```javascript
const Profile = ({ match }) => {
    const { username } = match.params;

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>
                {profile.description}
            </p>
        </div>
    );
};

```

### 쿼리스트링
### 사용 <br>
``props.location.search[쿼리스트링_이름]``으로 접근이 가능하나, <br>
string형태로 되어있다, 파싱을 위해 qs 라이브러리를 사용한다.
``` javascript
import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 맨앞 ? 생략
    });

    const showDetail = query.detail === 'true'

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            {showDetail && <p>Detail 값을 true로 설정하셨군요</p>}
        </div>
    )
}

export default About;
```

---
## 서브 라우트
그냥 간단하게 Route안에 Route를 넣어주면 된다.

### 상위라우트 컴포넌트
App.js
```html
<div>
    <ul>
        <li>
            <Link to="/profiles">프로필들</Link>
        </li>
    </ul>
    <hr></hr>
    <Route path="/profiles" component={Profiles}></Route>
</div>
```
### 하위라우트 컴포넌트
Profiles.js
```html
<div>
    <ul>
        <li>
            <Link to="/profiles/ginameee">ginameee</Link>
        </li>
        <li>
            <Link to="/profiles/gildong">gildong</Link>
        </li>
    </ul>
    <hr></hr>
    <Route
        path="/profiles"
        exact={true}
        render={() => <div>사용자를 선택해주세요</div>}
    ></Route>
    <Route
        path="/profiles/:username"
        component={Profile}
    >
    </Route>
</div>
```
---
## WithRouter
라우팅에 사용된 컴포넌트가 아니어도, <br>
location, match, history 등의 routing 정보에 접근이 가능하게 해준다.

### 사용
```javascript
export default withRouter(WithRouterSample);
```
---
## Switch
Path에 일치하는 단 하나의 route만을 보여줌, <br>
일치하는 정보가 없을 때의(404) 처리도 가능 (path를 지정하지 않을경우 기본 페이지가 된다.)
```html
<Switch>
    <Route path="/" component={Home} exact={true}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/profiles" component={Profiles}></Route>
    <Route path="/history" component={HistorySample}></Route>
    <Route 
        render={
            ({ location }) => (
                <div>
                    <h2>이 페이지는 존재하지 않습니다.</h2>
                    <p>{location.pathname}</p>
                </div>
            )
        }></Route>
</Switch>
```