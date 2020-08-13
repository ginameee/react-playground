import React from 'react';
import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';

import getRandomColor from '../lib/getRandomColor'

const mapReduxStateToProps = (state) => ({
    counters: state.counters
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({ index, color }))
    }
});

const CounterContainerList = connect(
    mapReduxStateToProps,
    mapDispatchToProps
)(CounterList);

export default CounterContainerList;