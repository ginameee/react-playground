import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onClick(size) {
            dispatch({ type: 'INCREMENT', size: size });
        }
    };
}

export default connect(null, mapDispatchToProps)(AddNumber);

// import React from 'react';
// import store from '../store';

// export default class extends React.Component {
//     onClick = (size) => {
//         store.dispatch({ type: 'INCREMENT', size: size });
//     };

//     render() {
//         return (
//             <AddNumber onClick={this.onClick}></AddNumber>
//         );
//     }
// }