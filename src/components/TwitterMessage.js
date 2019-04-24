import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      form: {msg: "", counter: 0},
    };
  }

  handleChangeInput = event => {
    const maxLength = this.props.maxChars
    const value1 = event.target.value;
    const msg = value1.slice(0, maxLength);
    const counter = msg.length
    this.setState({
      form: {
        msg,
        counter
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChangeInput}
          value={this.state.form.msg}
          maxLength={this.props.maxChars}
          />
        <span> {this.state.form.msg.length}/{this.props.maxChars}</span> <span> {(this.props.maxChars) - (this.state.form.msg.length)}</span>
      </div>
    );
  }
}

export default TwitterMessage;
