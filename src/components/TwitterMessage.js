import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  changeMessage = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeMessage}/>
        <strong>{this.props.maxChars - this.state.message.length} Characters Left</strong>
      </div>
    );
  }
}

export default TwitterMessage;
