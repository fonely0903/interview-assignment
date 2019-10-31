import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h3 style={{flex: 10}}>Movie System</h3>
      <Link style={linkStyle} to="/">Home</Link>
    </header>
  )
}

const headerStyle = {
  background: '#5d737e',
  color: '#fff',
  textAlign: 'left',
  padding: '10px 10px',
  display: 'flex'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  textAlign: 'right',
  margin: 'auto',
  flex: 1
}

export default Header;
