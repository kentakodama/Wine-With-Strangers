
import React from 'react';

class LoginForm extends React.Component {
  //accepts props from container here
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    e.preventDefault();
    this.setState({ email: e.currentTarget.value });
  }

  handlePassword(e) {
    e.preventDefault();
    this.setState({ password: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.formType(user);
    this.setState({ email: '', password: ''});
  }

  render() {
    return (
      <div className="login-form-box">
        <h3>Welcome back, amigo!</h3>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input className="login-form-input" placeholder="enter email" onChange={this.handleEmail} />
          <input type="password"className="login-form-input" placeholder="enter password" onChange={this.handlePassword} />
          <input className="login-button" type='submit' value="Login" />
        </form>
      </div>
    );
  }


}

export default LoginForm;
