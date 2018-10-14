import React from 'react';
import { Link } from 'react-router-dom';

class AuthNavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
  }

  componentDidMount(){
    let id = this.props.id;
    if (id !== null){
      this.props.fetchUser(id);
    }
  }

  render(){
    
  }
}

export default NavBar;
