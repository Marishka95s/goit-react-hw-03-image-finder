import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
    return(
        <button type="button" onClick={this.props.onFetchImages} >
            Load more
        </button>
    )}
};
// Button.propTypes = {
//     id: PropTypes.any,
//     name: PropTypes.string,
//     number: PropTypes.string,
// }

export default Button;