import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ''
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      maxChars: (this.state.maxChars - event.target.value.length),
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessageChange} value={this.state.message}/>
        <p>{this.state.maxChars}/140</p>
      </div>
    );
  }
}

export default TwitterMessage;
