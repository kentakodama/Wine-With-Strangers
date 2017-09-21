
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
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input onChange={this.handleEmail} />
        </label>
        <label> Password
          <input onChange={this.handlePassword} />
        </label>
        <input type='submit' />
      </form>

    );
  }


}

export default LoginForm;
