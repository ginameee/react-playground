import React from "react";
import "./App.css";
// import notify from "./notify"; // 일반적인 import

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

// function App() {
//   const onClick = () => {
//     // notify(); // 일반적인 import

//     // 동적 import
//     import("./notify").then((result) => {
//       // export default는 result.default를 참조한다.
//       result.default();
//     });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hello React!</p>
//         <p onClick={onClick}>Hello React!</p>
//       </header>
//     </div>
//   );
// }

export default App;
