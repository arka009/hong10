/**
 * Created by zxy on 2018/1/5.
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        let todoItems;
        if(this.props.todos) {
            todoItems = this.props.todos.map(todo=>{
                return (
                    <TodoItem key={todo.title} todo={todo} />
                )
            })
        }

        return (
            <div className="Todos">
                <h3>Todo List</h3>
                {todoItems}
            </div>
        )

    }
}

Todos.propTypes = {
    todo: PropTypes.array
}

export default Todos;