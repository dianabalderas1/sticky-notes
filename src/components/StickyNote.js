import React from 'react';
import Draggable from 'react-draggable';
import './StickyNote.css';

class StickyNote extends React.Component {


  render() {
    return (
        <div>
        <Draggable>
        <div className="box">
            <div>Move me around!</div>
        </div>
    </Draggable>
    </div>
    )
  }
}

export default StickyNote;