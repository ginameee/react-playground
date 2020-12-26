import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

function mapReduxStateToProps(state) {
    return {
        number: state.number
    }
}

export default connect(mapReduxStateToProps)(DisplayNumber)

/*
import store from '../store';
import React from 'react';
export default class extends React.Component {
    state = {
        number: store.getState().number
    };

    componentDidMount() {
        store.subscribe(
            () => {
                this.setState({ number: store.getState().number });
            }
        );
    }
    render() {
        return (
            <DisplayNumber number={this.state.number}></DisplayNumber>
        );
    }
}
*/