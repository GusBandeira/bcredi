// IE Polyfills
import 'core-js/es/map'; // for IE old browsers
import 'core-js/es/set'; // for IE old browsers
import 'raf/polyfill'; // for IE old browsers

import React from 'react'
import ReactDOM from 'react-dom'

// Main Component
import Login from "./pages/Login/Login"

// Import CSS
import "./layout.css"



const App = () => <Login />


ReactDOM.render(<App />, document.getElementById('root'))