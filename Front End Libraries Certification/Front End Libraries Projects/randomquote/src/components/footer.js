import React from 'react';
import './footer.css';

const Footer = () => (
  <div id="footer">
    <footer>
      <p className="text-muted"><em>&copy; <a href="https://github.com/shimphillip" target="_blank" rel="noopener noreferrer">Phillip Shim</a> {(new Date().getFullYear())}</em></p>
    </footer>
  </div>
)

export default Footer;