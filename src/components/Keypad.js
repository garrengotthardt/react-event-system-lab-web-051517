// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {
  constructor(props){
    super(props);

  }

  enteringPassword(){
    console.log('Entering password...')
  }

  render(){
    return(
      <input onKeyUp={this.enteringPassword} type="password" placeholder="password"/>
    )
  }
}

export default Keypad;
