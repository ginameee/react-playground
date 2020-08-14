import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Counter from './Counter';
import Info from './Info';


const UseReducer = () => {
    return (
        <div>
            <h1>useReducer Practice!</h1>
            <ul>
                <li><Link to="/useReducer/counter">counter</Link></li>
                <li><Link to="/useReducer/info">info</Link></li>
            </ul>
            <switch>
                <Route path="/useReducer/counter" component={Counter}></Route>
                <Route path="/useReducer/info" component={Info}></Route>
            </switch>
        </div>
    );
}

export default UseReducer;