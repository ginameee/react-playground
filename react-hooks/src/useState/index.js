import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Counter from './Counter';
import Info from './Info';

const UseStateApp = () => {
    return (
        <div>
            <h1>
                UseState Practice!
            </h1>
            <hr></hr>
            <ul>
                <li>
                    <Link to="/useState/counter">counter</Link>
                </li>
                <li>
                    <Link to="/useState/info">info</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/useState/counter" component={Counter}></Route>
                <Route path="/useState/info" component={Info}></Route>
                <Route render={() => { return (<p>UseState 예제프로그램 입니다!</p>); }}></Route>
            </Switch>
        </div>
    )
};

export default UseStateApp;