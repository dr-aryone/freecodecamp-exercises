import React, { Component } from 'react';
import './footer.css';

const Footer = () => (
  <div id="footer">
    <footer>
      <p class="text-muted"><em>&copy; <a href="https://github.com/shimphillip" target="_blank">Phillip Shim</a> {(new Date().getFullYear())}</em></p>
    </footer>
  </div>
)

export default Footer;