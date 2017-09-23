
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
      <div className="login-form-box">
        <h3>Let's drink away our loneliness, together!</h3>
        <form className='login-form' onSubmit={this.handleSubmit} >
          <input className="login-form-input" placeholder="Enter your first name" onChange={this.handleName} />
          <input className="login-form-input" placeholder="Enter email" onChange={this.handleEmail} />
          <input className="login-form-input" placeholder="Please select a password"onChange={this.handlePassword} />
          <input className="login-button" type='submit' value="Start Drinking!" />
          <ul>
            {this.props.errors.map((error, index) => (
              <li className='errors'key={`error-${index}`}>{error}</li>))}
          </ul>
        </form>
      </div>
    );
  }


}

export default SignupForm;
