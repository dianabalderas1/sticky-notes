import React from 'react';
import Header from './components/Header';
import fire from './config/fire';


class Login extends React.Component {


  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    

    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        fire.database().ref("Users").push({
          name: document.querySelector('#name').value,
          userID: fire.auth().currentUser.uid
        })
        console.log('Successfully Signed Up');

      }
      )
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
  state = { showing: false };

  render() {
    const { showing } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <Header />
          {showing
            ? <div>
              <div>Name</div>
              <input id="name" placeholder="Enter Name.." type="text" />
            </div>
            : null
          }
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text" />
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="text" />
        </div>
        {showing
          ? null
          : <button style={{ margin: '10px' }} onClick={this.login}>Login</button>
        }
        {showing ? <button onClick={() => this.setState({ showing: !showing })}>Return to Login</button>
          : <button onClick={() => this.setState({ showing: !showing })}>Create Account</button>
        }
        {showing
          ? <div>
            <button style={{ margin: '10px' }} onClick={this.signUp}>Sign Up</button>
          </div>
          : null
        }
      </div>
    )
  }
}

export default Login;