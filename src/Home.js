import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import fire from './config/fire';
import StickyNote from './components/StickyNote';
import Draggable from 'react-draggable';

//accessing realTime DB
let db = fire.database();
type Note = { t: string; x: number; y: number; c: number };
type Notes = { [key: string]: Note };

 //creating the reference to the collection 
const notesRef = db.ref("Sticky");
// const  newNote = notesRef.push();

class Home extends React.Component {
   
  
  state = {
    stickyList: []
  }
  

  logout() {
    fire.auth().signOut();
  }

  succesLogin(){
    console.log('Success');
  }

  //add function will push to RealTime DB
   add = () => {
    const newPostKey = notesRef?.push().key ;
    notesRef?.update({
      [newPostKey]: {
        t: "First Note",
        x: window.scrollX + Math.floor(Math.random() * (200 - 80) + 80),
        y: window.scrollY + Math.floor(Math.random() * (200 - 80) + 80),
        c: 5,
      },
    });
  };

  //retrieve data from database 
  retrieveData(){
  notesRef.on('value', (snapshot) => {
    let stickyList = [];
    snapshot.forEach((data) => {
      stickyList.push(data.val());
    });
    console.log(stickyList); 
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  }); 
  }

  render() {
    return (
      <><div>
        {/* <h1>You are Logged In</h1> */}
        <Header />
        <button onClick={() => this.add()}>createStickyNote</button>
        <button onClick={() => this.retrieveData()}>Retrieve</button>
        <button onClick={this.logout}>Logout</button>
      </div>
      <div>
          <Draggable>
            <div>
              <textarea>
                Edit text and move me around!
              </textarea>
            </div>
          </Draggable>
        </div></>
         
      
    )
  }
}

export default Home;