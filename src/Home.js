import React from 'react';
import Header from './components/Header';
import fire from './config/fire';

class Home extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Header />
        <h1>You Are Logged In</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
    )
  }
}

export default Home;