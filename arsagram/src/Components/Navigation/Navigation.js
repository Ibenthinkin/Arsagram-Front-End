import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    let yPostion = window.pageYOffset
      yPostion <= 0 
        ? this.setState({display: 'none'})
          : this.setState({display: 'flex'})
  };





  render() {
    const {onRouteChange, isSignedIn, toggleAbout} = this.props
      if (isSignedIn) {
        return (
          < nav
          style = {
            {
              position: 'fixed',
              right: '1rem',
              display: `${this.state.display}`,
              zIndex: 1,
            }
            
          }>
            <p onClick={() => toggleAbout()} className='f3 link dim black underline pa1 mv3 pointer black'>About</p>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa1 mv3 pointer black'>Sign Out</p>
          </nav>
        );
      } else {
        return (
          <nav 
            
            style={{display: 'flex', justifyContent: 'flex-end'}}
          >
              <p onClick={() => onRouteChange('about')} className='f3 link dim black underline pa1 mv3 pointer black'>About</p>
              <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa1 mv3 pointer black'>Sign In</p>
              <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa1 mv3 pointer black'>Register</p>
          </nav>
        );
      }
  }       
}

/* <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
  <nav class="f6 fw6 ttu tracked">
    <a class="link dim white dib mr3" href="#" title="Home">Home</a>
    <a class="link dim white dib mr3" href="#" title="About">About</a>
    <a class="link dim white dib mr3" href="#" title="Store">Store</a>
    <a class="link dim white dib" href="#" title="Contact">Contact</a>
  </nav>
</header> */