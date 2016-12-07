import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleAll } from '../actions';

import Input from '../components/Input.jsx';

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onAddTodo: (value) => dispatch(addTodo(value)),
        onToggleAll: () => dispatch(toggleAll())
    };
}

@connect(undefined, mapDispatchToProps)
export default class AddTodo extends Component {
    render() {
        return <Input onEnter={this.props.onAddTodo} onToggleAll={this.props.onToggleAll} placeholder="What needs to be done?" />;
    }
}
