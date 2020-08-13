import React from 'react';

export default class AddNumber extends React.Component {
    state = { size: 1 };

    onPlus = () => {
        this.props.onClick(this.state.size);
    };

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({ size: Number(value) });
    };

    render() {
        return (
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={this.onPlus}></input>
                <input type="text" value={this.state.size} onChange={this.onValueChange}></input>
            </div>
        );
    }
}