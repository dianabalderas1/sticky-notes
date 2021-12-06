import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import fire from './config/fire';
import StickyNote, { add, removeSticky } from './components/StickyNote';
//import Draggable from 'react-draggable';


class Home extends React.Component {


  state = {
    stickyList: []
  }


  logout() {
    fire.auth().signOut();
  }

  succesLogin() {
    console.log('Success');
  }


  render() {
    return (
        <div>
          <div>
            {/* <h1>You are Logged In</h1> */}
            <button className="button" onClick={add}>createStickyNote</button>  
            <button className="button" onClick={this.logout}>Logout</button>
            <Header />
            <StickyNote />
          </div>

        </div>
    )
  }
}

export default Home;

