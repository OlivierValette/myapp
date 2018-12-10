import React, { Component } from 'react';

class Clock extends Component {
    // constructeur qui récupère les props et les renvoie au parent
    constructor(props) {
        super(props);  // renvoie les attributs au parent
        this.state = { date: new Date() }; // initialisation du state
    }
    // démarrage du timer et mise à jour du state
    // setState appele le render
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