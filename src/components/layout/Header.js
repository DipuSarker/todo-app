import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
         <header style={ headerStyle }>
             <h1>TodoList</h1>
             <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
         </header>
    )
}

const headerStyle = {
    color: '#A9A9A9',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#A9A9A9',
    textDecoration: 'None'
}



export default Header;