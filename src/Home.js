import React from 'react';
import Header from './components/Header';
import fire from './config/fire';
import StickyNote from './components/StickyNote';
import Draggable from 'react-draggable';

class Home extends React.Component {

  state = {
    showSticky: false
  }

  logout() {
    fire.auth().signOut();
  }

  succesLogin(){
    console.log('Success');
  }

  createSticky = () => {
    this.setState({showSticky: true});
    console.log("Success");
    return (<StickyNote />);
  }


  render() {
    return (
      <div style={{textAlign: 'center'}}>
        {/* <h1>You are Logged In</h1> */}
        <Header />
        <button onClick = {this.state.showSticky ? null : this.createSticky}>createStickyNote</button>
        <button onClick = {this.logout}>Logout</button>

        <Draggable>
            <div>
            <textarea>Edit text and move me around!</textarea>
            </div>
      </Draggable> 
      </div>
    )
  }
}

export default Home;