import React from 'react';
import {Link} from 'react-router';
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.saveEmail = this.saveEmail.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }

  saveEmail(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
   
  onsubmit(event) {

  }

  render() {
    return (
      <div className="container">
        <h3>请登录</h3>
        <LoginForm onChange={this.saveEmail} onSubmit={this.onsubmit}/>
      </div>
    );
  }
}

export default LoginPage;
