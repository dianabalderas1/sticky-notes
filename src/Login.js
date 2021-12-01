import React from 'react';
import Header from './components/Header';
import fire from './config/fire';
import './index.css';
import './App.css';


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
              <div className="name">Name</div>
              <input id="name" placeholder="Enter Name.." type="text" />
            </div>
            : null
          }
          <div className="email">Email</div>
          <input id="email" placeholder="Enter Email.." type="text" />
        </div>
        <div>
          <div className="password">Password</div>
          <input id="password" placeholder="Enter Password.." type="text" />
        </div>

        {showing
          ? null
          : <button className="button" style={{ margin: '10px' }} onClick={this.login}>Login</button>
        }
        {showing ? <div><button className="button3" onClick={() => this.setState({ showing: !showing })}>Return to Login</button></div>
          :<button className="button2" onClick={() => this.setState({ showing: !showing })}>Create Account</button>
        }
        {showing? <div>
            <button className="button4" style={{ margin: '10px' }} onClick={this.signUp}>Sign Up</button>
          </div>
         
          : null
        }
        <footer className="footer">Made with <i className="icon ion-heart" style={{color: "#e25555"}}></i> in Bakersfield</footer>
      </div>
    )
  }
}

export default Login;