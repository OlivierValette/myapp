import React, {Component} from 'react';

const styles = {
  color: 'red'
};

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: ''};
    }
    handleSubmit(event) {
        event.preventDefault();
        // transférer l'info au parent (pour le Bonjour...)
        this.props.updateUserName(this.state.userName);
    }
    handleChange(event) {
        this.setState({userName: event.target.value}) // state attend un objet
    }
    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <p style={styles}>Votre prénom : {this.state.userName}</p>
                <input type="text" value={this.state.userName} onChange={e => this.handleChange(e)}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default Form;