import React, { Component } from 'react';
import './quote-box.css';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      author: ""
    }
  }

  componentDidMount() {
    fetch("https://talaikis.com/api/quotes/random/")
    .then(res => res.json())
    .then((result)=> {
      console.log(result);
      this.setState({
        quote: result.quote,
        author: result.author
      })
    })
  };

  render() {
    return (
      <div className='container' id="quote-box">
        <div className='row'>
          <div className = "col-2">
          </div>
          <div className = "col-8" id="text">
            {this.state.quote}
          </div>
        </div>
        <div className = "row">
          <div className = "col-6" id="author">
            -{this.state.author}        
          </div>
        </div>
        <div className = "row">
          <div className = "col-4">
          </div>
          <div className = "col-4">
            <button type="button" className="btn btn-outline-primary" id="tweet-quote">Tweet This</button>
          </div>
          <div className = "col-4">
              <button type="button" className="btn btn-outline-success" id="new-quote">Quote Again!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuoteBox;