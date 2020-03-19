import React from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'


it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Input></Input>, div)
});  