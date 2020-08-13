import React from 'react';
import AddNumber from '../containers/AddNumber';

export default class AddNumberRoot extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                <AddNumber></AddNumber>
            </div>
        );
    }
}