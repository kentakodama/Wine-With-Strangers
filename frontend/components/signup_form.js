
import React from 'react';

class SignupForm extends React.Component {
  //accepts props from container here
  constructor(props) {
    super(props);
    this.state = { email: '', name: '', password: '' };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // renderErrors() {
  //   return (this.props.errors.map((error, index) => (
  //     <li key={`error-${index}`}>{error}</li>)));
  // }

  handleName(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
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
    this.props.signup(user).then(() => this.props.history.push("/"));
    this.setState({ email: '', name: '', password: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>Name
          <input onChange={this.handleName} />
        </label>
        <label>Email
          <input onChange={this.handleEmail} />
        </label>
        <label> Password
          <input onChange={this.handlePassword} />
        </label>
        <input type='submit' />
        <ul>
          {this.props.errors.map((error, index) => (
            <li key={`error-${index}`}>{error}</li>))}
        </ul>
      </form>
    );
  }


}

export default SignupForm;
