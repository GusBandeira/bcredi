import React, { Component } from 'react'

// Style
import "./link.css"

export class Link extends Component {

    openLink = () => {
        const { props } = this
        window.open(props.for)
    }
    
    render() {
        const { props } = this
        return (
            <a 
                className="link" 
                href={props.for} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {" "}{props.children}{" "}
            </a>
        )
    }
}

export default Link
