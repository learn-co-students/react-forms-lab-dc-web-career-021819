import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsRemaining: this.props.maxChars
    };
  }

  updateHandler = event => {
    const msg = event.target.value
    this.setState({
      [event.target.name]: msg,
      charsRemaining: this.state.charsRemaining - msg.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.updateHandler} name="message" id="message" value={this.state.message} />
        <span>{this.state.charsRemaining}</span>
      </div>
    );
  }
}

export default TwitterMessage;
