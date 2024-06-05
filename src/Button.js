import React from 'react';

const Button = () => (
  <div style={buttonContainerStyle}>
    <nav>
      <ul style={navListStyle}>
        <li style={navItemStyle}><a href="/" style={linkStyle}>Home</a></li>
        <li style={navItemStyle}><a href="/about" style={linkStyle}>About</a></li>
        <li style={navItemStyle}><a href="/contact" style={linkStyle}>Contacts</a></li>
      </ul>
    </nav>
  </div>
);

const buttonContainerStyle = {
  backgroundColor: '#00FFFF', // Cyan background color
  padding: '10px 0', // Vertical padding
  display: 'flex',
  justifyContent: 'center',
};

const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: '20px', // Space between items
};

const navItemStyle = {
  margin: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#000', // Black color
  fontSize: '18px',
};

const Header = () => (
  <header style={headerStyle}>
    <nav>
      <ul style={navListStyle}>
        <li style={navItemStyle}><a href="/" style={linkStyle}>Home</a></li>
        <li style={navItemStyle}><a href="/about" style={linkStyle}>About</a></li>
        <li style={navItemStyle}><a href="/contact" style={linkStyle}>Contacts</a></li>
      </ul>
    </nav>
  </header>
);

const headerStyle = {
  backgroundColor: '#00FFFF', // Cyan background color
  padding: '10px 0', // Vertical padding
  display: 'flex',
  justifyContent: 'center',
};

export default Button; 