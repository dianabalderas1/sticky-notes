import React, { Component } from 'react';
import fire from './config/fire'
import Login from './Login.js';
import Home from './Home.js';
import note from './note.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container" id="about">
          <div className="row align-items-center">
            <div className="col headline"> <br />
            <h1 className="title">Sticky<span class="point">📝</span></h1>
            <h3 className="description"><em>Share your thoughts with others.</em></h3>
            <br />
            <img src={note} className="image" height={250}  width={250}/>
            <br />
            { this.state.user ? ( <Home /> ) : ( <Login /> ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;