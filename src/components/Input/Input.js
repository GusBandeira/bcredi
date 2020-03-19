import React, { Component } from 'react'

// Style
import "./input.css"

export class Input extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            errorMessage: "",
            value: "",
            showPassword: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { state, props } = this
        if(props.validation && props.validation(state.value) && 
            state.errorMessage !== "" && prevState.errorMessage !== state.errorMessage){
            this.setState({ value: "" })
        }

        if(props.triggerValidation !== prevProps.triggerValidation){
            this.validate(state.value)        
        }
    }

    setValue = (value) => {
        const { props, } = this
        this.setState({ 
            value: (props.mask ? props.mask(value) : value),
            errorMessage: "" 
        })
    }

    validate = (value) => {
        const { props } = this
        this.setState({ 
            errorMessage: props.validation ? props.validation(value) : "" 
        })

        let returnObj = {}
        returnObj[props.name] = !!!(props.validation ? props.validation(value) : "")
        
        props.setFormValue(returnObj);
    }

    renderPasswordToggler() {
        const { props, state } = this
        if(props.type === "password") {
            return <div className="password-toggler" onClick={() => this.setState({ showPassword: !state.showPassword })}/>
        }
    }

    render() {

        const { props, state } = this
        const className = state.errorMessage ? "input--error" : "";

        return (
            <div className="input">
                <label>
                    {props.title}
                    <input 
                        type={state.showPassword ? "text" : props.type} 
                        name={props.name}
                        title={props.title}
                        placeholder={props.placeholder}
                        maxLength={props.maxLength}

                        value={state.value}
                        className={className}
                        onBlur={e => this.validate(e.target.value)}
                        onChange={e => this.setValue(e.target.value)}
                    />
                    {this.renderPasswordToggler()}
                    <p className={state.errorMessage ? "input--error" : ""}> {state.errorMessage} </p>
                </label>
            </div>
        )
    }
}


export default Input
