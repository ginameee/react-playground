import React from 'react';
import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        'red',
        'blue',
        'yellow',
        'green'
    ];

    const random = Math.floor(Math.random() * colors.length);

    console.log(colors[random]);
    return colors[random];
}

const mapReduxStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => dispatch(actions.setColor(getRandomColor()))
});

const CounterContainer = connect(
    mapReduxStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;


