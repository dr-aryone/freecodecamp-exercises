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
      <div className='container' id="quote-box">
        <div className='row'>
          <div className = "col-2">
          </div>
          <div className = "col-8">
            <blockquote className="blockquote">
              <p className="mb-0" id="text">
                {this.state.quote}
              </p>
              <footer className="blockquote-footer" id="author">
                <cite title="Source Title">{this.state.author}</cite>
              </footer> 
            </blockquote>
          </div>
        </div>
          <a className ="btn btn-outline-info btn-lg btn-block" href={"https://twitter.com/intent/tweet?related=freecodecamp&text=" + encodeURIComponent('"' + this.state.quote + '" - ' + this.state.author)} id="tweet-quote" target="_blank"><i className="fab fa-twitter"></i> THIS</a>
          <button type="button" className="btn btn-outline-success btn-lg btn-block" id="new-quote" onClick={this.getQuote}>ANOTHER <i className="fas fa-quote-left"></i></button>
      </div>
    )
  }
}

export default QuoteBox;