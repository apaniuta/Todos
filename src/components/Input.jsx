import React, { Component } from 'react';

import styles from './Input.less';
import done_all from '../assets/done_all.svg';

const ENTER_KEY = 13;

export default class Input extends Component {
    constructor() {
        super();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    state = {
        text: ""
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.props.onEnter(this.state.text);
            this.setState({ text: "" });
        }
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.button}
                     onClick={this.props.onToggleAll}
                >
                    <img className={styles.img} src={done_all} />
                </div>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
