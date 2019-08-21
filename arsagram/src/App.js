import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import ControlBar from './Components/ControlBar/ControlBar';
import InfoCanvas from './Components/InfoCanvas/InfoCanvas';
import MainCanvas from './Components/MainCanvas/MainCanvas';
import Footer from './Components/Footer/Footer';


import './App.css';

const initialState = {
  contentType: 'randomPoetry',
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
        entries: data.views,
        joined: data.joined
      }
    })
  }

    toggleSlider = () => {
      const {contentType} = this.state
        contentType === 'randomPoetry' 
          ? this.setState({
            contentType: 'images'
          })
            : this.setState({contentType :'randomPoetry'})
    }

    onSubmit = (event) => {
      let {id} = event.target
        id === 'nextButton' ? console.log(id) : console.log(id)
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
    const { isSignedIn, contentType, route} = this.state;
    let page
      switch(route) {
        case 'home':
          page = <div>
              <MainCanvas/>
              < ControlBar toggleSlider={this.toggleSlider} onSubmit={this.onSubmit}/ >
              <InfoCanvas/>
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
            <Footer/>>
      </div>
    );
  }


}