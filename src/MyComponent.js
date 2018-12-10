import React, { Component } from 'react';

function MyComponent(props) {
    const myStyle = {
        backgroundColor: 'yellow',
        color: props.color
    };
    return <strong style={myStyle}>{props.content}</strong>
}

export default MyComponent;