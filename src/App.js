import React, { Component } from 'react';
import './App.css';
import weatherService from './service/weatherService'

import Location from './components/Location'

class App extends Component {
  constructor() {
    super() 

    this.state = {
      currentLocation:[],
      currentWeather:[]
    }
  }

  getTheWeather = (city) => {
    weatherService.getCurrent(city)
      .then(response => {
        this.setState({
          currentWeather:response.data.current.condition
        })
      })
      .catch(console.error)
  }

  getTheIP = () => {
    weatherService.getLocation()
      .then(response => {
        this.setState({
          currentLocation:response
        }, () => {
          this.getTheWeather(this.state.currentLocation)
        })
      })
      .catch(console.error)
  }

  componentWillMount() {
    this.getTheIP()
  }

  render() {
    return (
      <div className="App">
        <Location location={this.state.currentLocation} weather={this.state.currentWeather} />
      </div>
    );
  }
}

export default App;
