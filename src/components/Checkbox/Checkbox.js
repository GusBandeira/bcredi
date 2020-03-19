import React, { Component } from 'react'

// Style
import "./checkbox.css"

export class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            checked: false
        }
    }

    toggleValue = () => {
        const { state, props } = this
        this.setState({ checked: !state.checked })

        let returnObj = {}
        returnObj[props.name] = !state.checked
        props.setFormValue(returnObj);
    }

    render() {
        const { props, state } = this

        return (
            <div className="checkbox">
                <input 
                    type="checkbox" 
                    name={props.name} 
                    checked={state.checked}
                    onClick={this.toggleValue}
                    onChange={() => {}}
                />
                <label>
                    {props.children}
                </label>
            </div>
        )
    }
}

export default Checkbox
