import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    event.target.id === "password" ? this.setState({password: event.target.value}) : this.setState({username: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault()
    if (this.state.password !== "" && this.state.username !== "") {
      this.props.handleLogin({password: this.state.password, username: this.state.username})
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
              value={this.state.username}
              onChange={this.handleChange}
           />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
              value={this.state.password}
              onChange={this.handleChange}
              onSubmit={this.submitHandler}
           />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
