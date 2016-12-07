import React, { Component } from 'react';
import edit from '../assets/edit.svg';
import del from '../assets/delete.svg';

import styles from './Todo.less';

const ENTER_KEY = 13;

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleOnEditTodo = this.handleOnEditTodo.bind(this);

        this.state = {
            text: this.props.text
        }
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleKeyDown(e) {
        const { 
            onEditTodo,
            id
        } = this.props;

        if (e.keyCode === ENTER_KEY) {
            onEditTodo(id, this.state.text);
        }
    }

    handleOnEditTodo() {
        const { 
            onEditTodo,
            id
        } = this.props;

        onEditTodo(id, this.state.text);
    }

    render() {
        const { 
            text, 
            completed, 
            onToggle, 
            onDeleteTodo, 
            editing 
        } = this.props;

        return (
            <div className={styles.root}>
                <div
                    className={completed ? styles.completed : styles.todo}
                    onClick={editing ? null : onToggle}
                >
                    {
                        editing
                        ? <input
                            className={styles.input}
                            type="text"
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            onKeyDown={this.handleKeyDown}
                        />
                        : this.state.text
                    }
                </div>
                <div className={styles.content}>
                    <div className={styles.edit} onClick={completed ? null : this.handleOnEditTodo}>
                        <img className={styles.edit_icon} src={edit} />
                    </div>
                    <div className={styles.delete} onClick={onDeleteTodo}>
                        <img className={styles.delete_icon} src={del} />
                    </div>
                </div>
            </div>
        );
    }
}