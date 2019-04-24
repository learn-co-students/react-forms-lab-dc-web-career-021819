import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChangeInput = event => {
    const newVal = event.target.value
    // const targetState = this.state[event.target.id]
    this.setState({
      [event.target.name]: newVal
    })
  }

  submitHandler = event => {
    event.preventDefault()
    if (!this.state.username.length || !this.state.password) {
      return
    }
    console.log(this.state.username, this.state.password)
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChangeInput}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangeInput}

            />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
