import React from 'react';
import note from './note.png';


class Header extends React.Component {


  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div className="col headline"> <br />
            <h1 className="title">Sticky<span class="point">📝</span></h1>
            <h3 className="description"><em>Share your thoughts with others.</em></h3>
            <br />
            <img src={note} className="image" height={250}  width={250}/>
            <br />
        </div>
      </div>
    )
  }
}

export default Header;