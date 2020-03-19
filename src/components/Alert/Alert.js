import React, { Component } from 'react'

// Style
import "./alert.css"

export class Alert extends Component {

    render() {
        const { props } = this
        return (
            <React.Fragment>
                {props.visibility &&
                    <div className={`alert alert--${props.color}`}>
                        {props.children}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default Alert
