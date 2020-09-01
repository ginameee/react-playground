# 코드 스플리팅

하나의 파일로 번들링하는것이 아닌, <br>
파일을 특정 기준으로 분리하여, 로딩이나 캐싱에 있어서 최대의 효율을 낼 수 있도록 하는 방법

<br>

## 동적 로딩을 통한 코드스플리팅

<hr>

webpack 제공하는 import 함수를 이용해서, 동적으로 파일을 import 한다. <br>
동적으로 import되는 파일은 호출하는 시점에 request 하게 된다.

```javascript
import("./notify").then((result) => {
  // export default는 result.default를 참조한다.
  result.default();
});
```

<br>
<br>

### React에서 컴포넌트 동적 로딩 하는 법

<br>

#### State를 이용 ([App.state.js](./src/App.state.js))

동적으로 import한 컴포넌트를 state에 저장한다. <br>
단점) 매번 컴포넌트를 저장할 state를 선언해주어야 한다.

```js
class App extends React.Component {
  state = {
    SplitMe: null,
  };

  handleClick = async () => {
    const loadedModule = await import("./SplitMe");
    this.setState({
      SplitMe: loadedModule.default,
    });
  };

  render() {
    const { SplitMe } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}
```

<br>

#### Suspense Component & React.lazy 이용하기
