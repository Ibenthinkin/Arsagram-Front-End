import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import About from './components/About/About';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    views: 0,
    joined: ''
  }
}

export default class App extends Component {
  
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

    onInputChange = (event) => {
      this.setState({
        input: event.target.value
      });
    }

  toggleAbout = () => {
    const {
      isSignedIn,
      route
    } = this.state
    isSignedIn && route === 'about' ? this.onRouteChange('home') :
      this.onRouteChange('about')
  }


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({
        isSignedIn: true
      })
    }
    this.setState({
      route: route
    });
  }

    render() {
    const { isSignedIn, imageUrl, route, box} = this.state;
    let page
      switch(route) {
        case 'home':
          page = <div>
              <MainCanvas/>
              <ControlBar/>
          </div>;
          break;
        case 'register':
          page = <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />;
          break;
        case 'about':
          page = <About/>
          break;
        default:
          page = <Signin loadUser={this.loadUser} 
          onRouteChange={this.onRouteChange} />;
      }

    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} 
          onRouteChange={this.onRouteChange}
          toggleAbout={this.toggleAbout} 
          />
          {page}
      </div>
    );
  }


}