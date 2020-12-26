import React from 'react';
import Counter from './containers/CounterContainer';
import Todos from './containers/TodosContainer';

function App () {
  return (
    <div className="App">
      <Counter number={0}/>
      <hr />
      <Todos />
    </div>
  );
}

export default App;
