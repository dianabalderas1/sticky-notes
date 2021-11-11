import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './StickyNote.css';
import fire from '../config/fire';


//accessing realTime DB
let db = fire.database();

//creating the reference to the collection 
const notesRef = db.ref("Sticky");

// const  newNote = notesRef.push();

// //retrieve data from database 
// const retrieveData = () => {
//     notesRef.on('value', (snapshot) => {
//         let stickyList = [];
//         snapshot.forEach((data) => {
//             stickyList.push(data.val());
//         });
//         // console.log(stickyList); 
//         return stickyList;
//     }, (errorObject) => {
//         console.log('The read failed: ' + errorObject.name);
//     });
// }

//add function will push to RealTime DB
const add = () => {
    const newPostKey = notesRef?.push().key;
    notesRef?.update({
        [newPostKey]: {
            t: "First Note",
            x: window.scrollX + Math.floor(Math.random() * (200 - 80) + 80),
            y: window.scrollY + Math.floor(Math.random() * (200 - 80) + 80),
            c: 5,
        },
    });
};

 const update = (key, item) => db?.update({ [key]: item });
 const remove = (key) => db?.child(key).remove();


class StickyNote extends React.Component {
   
    constructor(props) {
        super(props);
        this.retrieveData(this.stickyList);
        console.log(this.stickyList);

    }
    stickyList = [];

    retrieveData = (stickyList) => {
        notesRef.on('value', (snapshot) => {
            // let stickyList = [];
            snapshot.forEach((data) => {
                stickyList.push(data.val());
            });
            //  console.log(stickyList); 
            return stickyList;
        }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
        });
    };

    render() {
        return this.stickyList.map((note) => 
      
        <div class = "noteText"
        style={{
            left: note.x + "px",
            top: note.y + "px"
          }}
        >
            <button class = "delete">x</button>
            {note.t}

        </div>
        
        );
    }

            // <div className="noteText">
            //     <button id="delete" >x
            //     {this.stickyList}</button>
            //     <textarea className="EditableText" name="textEntry"></textarea>
            // </div>


        
    
}

export default StickyNote;
export { add };