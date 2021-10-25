import React from 'react';
import note from './note.png';
import fire from '../config/fire'



class Header extends React.Component {
 
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

      //function to render image only on frontpage and not when user is logged in
      imageOnOF(){
        if(!this.state.user)
           return <img src={ note} className="image" height={250}  width={250} />;
     }

  render() {
    return (
      <div style={{textAlign: 'Left'}}>
        <div className="col headline" > 
            <br />
            <h1 className="title">Sticky📝</h1>
            <h3 className="description"><em>Share your thoughts with others.</em></h3>
            <br />
            {this.imageOnOF() }
            <br />
        </div>
      </div>
    )
  }
}

export default Header;