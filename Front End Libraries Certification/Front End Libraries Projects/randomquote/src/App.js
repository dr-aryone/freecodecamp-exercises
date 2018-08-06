import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/quote-box.js'
import Footer from './components/footer.js'

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <QuoteBox />
        <Footer />
      </div>
    );
  }
}

export default App;