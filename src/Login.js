import React from 'react';
import Header from './components/Header';
import fire from './config/fire';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <div className="email"><em>Email</em></div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div className="password"><em>Password</em></div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <br />
        <button onClick={this.login}  className="button">Login</button>
        <button onClick={this.signUp} className="button2">Sign Up</button>
      </div>
    )
  }
}

export default Login;