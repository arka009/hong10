/**
 * Created by zxy on 2018/1/5.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <div className="Todo">
                <strong>{this.props.todo.title}</strong>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object
}

export default TodoItem;