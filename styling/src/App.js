import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SassComponent from './using-scss/SassComponent';
import CssModule from './using-css-module/CSSModule';
import StyledComponents from './using-styled-components/StyledComponents';

function App() {
  return (
    <div >
      <ul>
        <li>
          <Link to="/scss">SCSS</Link>
        </li>
        <li>
          <Link to="/css-module">CSS Module</Link>
        </li>
        <li>
          <Link to="/styled-components">Styled Components</Link>
        </li>
      </ul>
      <hr></hr>
      <Switch>
        <Route path="/scss" component={SassComponent} exact></Route>
        <Route path="/css-module" component={CssModule} exact></Route>
        <Route path="/styled-components" component={StyledComponents} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
