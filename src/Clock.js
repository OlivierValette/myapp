import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);  // renvoie les attributs au parent
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render () {
        return (<p>Il est {this.state.date.toLocaleTimeString()}</p>);
    }
}
export default Clock;