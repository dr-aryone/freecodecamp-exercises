class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
}

handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  
  submitMessage() {
   let newMessages = [...this.state.messages, this.state.input]
   this.setState({
     messages: newMessages,
     input: ''
   })
  }
  // add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
      { /* render an input, button, and ul here */ }
      <input value={this.state.input} onChange={this.handleChange} />
      <button onClick={this.submitMessage}>Add Message</button>
      <ul>
        {this.state.messages.map(msg => <li>{msg}</li>)}
      </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};