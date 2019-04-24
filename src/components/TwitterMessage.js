import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }

  handleChange= event=>{
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <br></br>
        <textarea
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        /><br></br>
        {this.props.maxChars - this.state.message.length} characters left.
      </div>
    );
  }
}

export default TwitterMessage;
