import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './StickyNote.css';
import fire from '../config/fire';
import { Rnd } from 'react-rnd';


//accessing realTime DB
let db = fire.database();
//creating the reference to the collection 
const notesRef = db.ref("Sticky");


/*var stickyID = document.getElementById("Sticky");
//add function will push to RealTime DB
 const add = () => {
     const newPostKey = notesRef?.push().key;
     notesRef?.update({
         [newPostKey]: {
             t: "First Note",
             x: window.scrollX + Math.floor(Math.random() * (200 - 80) + 80),
             y: window.scrollY + Math.floor(Math.random() * (200 - 80) + 80),
             c: fire.auth().currentUser.uid,
         },
     });
 };*/

 const add = () => {
    const newPostKey = fire.database().ref("Sticky").push().getKey();
    db.ref("Sticky/").update({
      [newPostKey]: {
        t: "Edit text here",
        pkey: newPostKey,
        x: window.scrollX + Math.floor(Math.random() * (200 - 80) + 80),
        y: window.scrollY + Math.floor(Math.random() * (200 - 80) + 80),
        c: fire.auth().currentUser.uid,
        key: newPostKey,
      },
    });
  };
// item = string; 

 const removeSticky = (item) => {
    fire.database().ref("Sticky/").child(item).remove();
    console.log("succes");


  };


 /*const add = () => {
    fire.database().ref("Sticky/").push({
        text: "Note Text",
        x: window.scrollX + Math.floor(Math.random() * (200 - 80) + 80),
        y: window.scrollY + Math.floor(Math.random() * (200 - 80) + 80),
        userID: fire.auth().currentUser.uid
})
};*/
/*const update = () => {
    db.ref("Sticky/").update({
        [newPostKey]: {
          t: "Edit text here",
          pkey: newPostKey,
          x: window.scrollX + Math.floor(Math.random() * (200 - 80) + 80),
          y: window.scrollY + Math.floor(Math.random() * (200 - 80) + 80),
          c: fire.auth().currentUser.uid,
        },
      });
    };
};*/

class StickyNote extends React.Component {
   
    constructor(props) {
        super(props);
        this.retrieveData(this.stickyList);
        console.log(this.stickyList);


    }
    stickyList = [];

    retrieveData = (stickyList) => {
        notesRef.on('value', (snapshot) => {
            snapshot.forEach((data) => {
                stickyList.push(data.val());
            });
            return stickyList;
        }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
        });
    };

//     item = string; 

//   removeSticky = (item) => {
//     fire.database().ref("Sticky/").child(item).remove();

//   };

    render() {
        return this.stickyList.map((note) => 
      <Rnd>
        <div class = "noteText"
        style={{
            position: 'absolute', 
            left: note.x + "px",
            top: note.y + "px"
          }}
        >

            {/* <button class = "delete" value= {note.key} onClick={ e => console.log( e.target.value)}>x</button> */}
            <button class = "delete" value= {note.key} onClick={ e => removeSticky(e.target.value)}>x</button>


            <textarea>
            {note.t}
           
            </textarea>

        </div>
        </Rnd>
        );
    }
}

export default StickyNote;
export { add, removeSticky };