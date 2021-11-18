import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './StickyNote.css';
import fire from '../config/fire';
import { Rnd } from 'react-rnd';


//accessing realTime DB
let db = fire.database();


//creating the reference to the collection 
const notesRef = db.ref("Sticky");

//add function will push to RealTime DB
// const add = () => {
//     const newPostKey = notesRef?.push().key;
//     notesRef?.update({
//         [newPostKey]: {
//             t: "First Note",
//             x: window.scrollX + Math.floor(Math.random() * (200 - 80) + 80),
//           y: window.scrollY + Math.floor(Math.random() * (200 - 80) + 80),
//             c: fire.auth().currentUser.uid,
//         },
//     });
// };

const add = () => {
    fire.database().ref("Sticky").push({
        text: "Note Text",
        x: window.scrollX + Math.floor(Math.random() * (200 - 80) + 80),
        y: window.scrollY + Math.floor(Math.random() * (200 - 80) + 80),
        userID: fire.auth().currentUser.uid
})
};
//  const update = (key, item) => db?.update({ [key]: item });
//  const remove = (key) => db?.child(key).remove();


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
            <button class = "delete">x</button>
            <textarea>
            {note.t}
            </textarea>

        </div>
        </Rnd>
        );
    }
}

export default StickyNote;
export { add };