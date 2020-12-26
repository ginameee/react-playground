import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter
            number={number}
            onIncrease={increase}
            onDecrease={decrease}
        />
    );
};

const mapStateToProps = state => ({
    number: state.counter.number  
});

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase())
//     },
//     decrease: () => {
//         dispatch(decrease())
//     }
// });


// const mapDispatchToProps = dispatch => bindActionCreators(
//     {
//         increase,
//         decrease
//     }, dispatch);


const mapDispatchToProps = {
    increase,
    decrease
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);