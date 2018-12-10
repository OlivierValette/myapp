import React, { Component } from 'react';

class Clock extends Component{

    constructor(props) {
        super(props);  // renvoie les attributs au parent
        this.state = { date: new Date() };
    }

    render () {
        return (<p>Il est {this.state.date.toLocaleTimeString()}</p>);
    }

}

export default Clock;