import React, { Component } from 'react';

import Todo from './Todo.jsx';

export default class TodoList extends Component {
    render() {
        return (
            <div className="base">
                {
                    this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            editing={todo.editing}
                            onToggle={() => this.props.onToggleTodo(todo.id)}
                            onEditTodo={this.props.onEditTodo}
                            onDeleteTodo={() => this.props.onDeleteTodo(todo.id)}
                        />
                    )
                }
            </div>
        );
    }
}
