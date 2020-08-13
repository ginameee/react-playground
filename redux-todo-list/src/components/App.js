import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

const App = () => (
    <PageTemplate>
        <TodoInputContainer></TodoInputContainer>
        <TodoListContainer></TodoListContainer>
    </PageTemplate>
);


export default App;