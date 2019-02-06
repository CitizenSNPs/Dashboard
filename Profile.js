import React, { Component } from 'react';


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.info = {
      name:'Derelle Kirksey',
      image: "",
      role: 'Admin'
    }

    this.state = {name:this.info.name};
  }


  render() {
    return (
      <div className='card'>
        <div className = 'background'>
          <img id='profile-pic' src= {require('./blank-profile.png')}/>
        </div>
        <p>{this.props.name}</p>
        <p id='role'>{this.props.role}</p>
        <p id='bottomtext'>lorem ipusmlorem ipusmlorem ipusmlorem ipusmlorem ipusmlorem ipusmlorem ipusm</p>
        <button>Change User</button>
      </div>
    )
  }
}

export default Profile
