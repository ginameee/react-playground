import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import UseStateApp from './useState';
import UseEffectApp from './useEffect';
import UseReducerApp from './useReducer';

const App = () => {
    return (
        <div>
            <h1>
                Hook Practice!
            </h1>
            <ul>
                <li><Link to="/useState">useState</Link></li>
                <li><Link to="/useEffect">useEffect</Link></li>
                <li><Link to="/useReducer">useReducer</Link></li>
                <li><Link to="/useMemo">useMemo</Link></li>
                <li><Link to="/useCallback">useCallback</Link></li>
                <li><Link to="/useRef">useRef</Link></li>
                <li><Link to="/custom">custom</Link></li>
            </ul>
            <hr></hr>
            <Switch>
                <Route path="/useState" component={UseStateApp}></Route>
                <Route path="/useEffect" component={UseEffectApp}></Route>
                <Route path="/useReducer" component={UseReducerApp}></Route>
                <Route render={() => (<p> 일치하는 페이지가 없습니다!</p>)}></Route>
            </Switch>
        </div>
    );
}

export default App;