import React, { Component } from 'react'

// Style
import "./button.css"

export class Button extends Component {
    render() {
        const { props } = this
        return (
            <div>
                <button 
                    type={props.type ? props.type : "button"}
                    className={`button ${props.className} ${props.disabled ? "disabled" : ""}`}
                    onClick={props.onClick} 
                    disabled={props.disabled}
                    data-testid="button"
                >
                    {props.children}
                </button>
            </div>
        )
    }
}

export default Button
