import React from 'react'
import ReactDOM from 'react-dom'
import Alert from './Alert'


it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Alert></Alert>, div)
});  