import React, { Component } from 'react';
import './quote-box.css';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      author: ""
    }
    this.getQuote = this.getQuote.bind(this);
  };

  getQuote() {
    fetch("https://talaikis.com/api/quotes/random/")
    .then(res => res.json())
    .then((result)=> {
      this.setState({
        quote: result.quote,
        author: result.author
      })
    })
  };

  componentDidMount() {
    this.getQuote();
  };

  render() {
    return (
      <div className='container-fluid' id="quote-box">
            <blockquote className="blockquote">
              <p className= "lead text-right" id="text">
              <i className="fas fa-quote-left"></i> {this.state.quote} <i className="fas fa-quote-right"></i>
              </p>
              <footer className="blockquote-footer text-right" id="author">
                <cite title="Source Title">{this.state.author}</cite>
              </footer> 
            </blockquote>
            <div id = "links">
          <a className ="btn btn-outline-info" href={"https://twitter.com/intent/tweet?related=freecodecamp&text=" + encodeURIComponent('"' + this.state.quote + '" - ' + this.state.author)} id="tweet-quote" target="_blank"><i className="fab fa-twitter"></i></a>&nbsp;
          <button type="button" className="btn btn-outline-success" id="new-quote" onClick={this.getQuote}>New <i className="fas fa-quote-left"></i></button>
            </div>
      </div>
    )
  }
}

export default QuoteBox;