import React from 'react';
import {Link} from 'react-router';
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  saveEmail(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
   
  render() {
    return (
      <div className="container">
        <h3>请登录</h3>
        <LoginForm/>
      </div>
    );
  }
}

export default LoginPage;
