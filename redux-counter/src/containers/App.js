import React, { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';

import CounterListContainer from '../containers/CounterListContainer'
import Buttons from '../components/Buttons'

import getRandomColor from '../lib/getRandomColor'

class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;

        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer></CounterListContainer>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => { dispatch(actions.create(getRandomColor())) },
    onRemove: () => { dispatch(actions.remove()) }
})

export default connect(null, mapDispatchToProps)(App);