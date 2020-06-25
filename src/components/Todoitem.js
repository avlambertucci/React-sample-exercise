import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Todoitem
