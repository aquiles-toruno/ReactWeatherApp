import React from 'react'
import 'EstilosMessage'

class Message extends React.Component {
    render() {
        return (
            <h3>{this.props.name}</h3>
        )
    }
}

export default Message;