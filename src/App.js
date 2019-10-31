import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header'
import SideBar from './components/layout/SideBar'
import Movies from './components/Movies'
import Home from './components/Home'
import SearchMovie from './components/SearchMovie'

import ComingSoon from './json/movie-comingsoon.json'
import NowPlaying from './json/movie-nowplaying.json'
import OpeningThisWeek from './json/movie-openingthisweek.json'

import './App.css';

class App extends Component{
  state = {
    movies : [],
    temp: [],
    page: ''
  }

  // Render Movie List
  renderPage = (page) =>{
    switch(page){
      case 'p':
        console.log(NowPlaying);
        this.setState({movies: NowPlaying, temp: NowPlaying})
        break
      case 'w':
        console.log(OpeningThisWeek);
        this.setState({movies: OpeningThisWeek, temp: OpeningThisWeek})
        break
      case 'c':
        console.log(ComingSoon);
        this.setState({movies: ComingSoon, temp:ComingSoon})
    }
  }

  // Search Movie
  searchMovie = (input) =>{
    input = input.toLowerCase()
    this.setState({movies: [...this.state.temp.filter(movie => {
      if(movie.eng_name.toLowerCase().includes(input)||movie.ch_name.includes(input))
      return movie;
    }
    )]})
  }

  // Get top 3 expectation
  getTopThree = (part) => {
    switch(part){
      case 'p':
        return NowPlaying.sort((a,b) => parseFloat(b.expectation) - parseFloat(a.expectation)).slice(0,3)
        break
      case 'w':
        return OpeningThisWeek.sort((a,b) => parseFloat(b.expectation) - parseFloat(a.expectation)).slice(0,3)
        break
      case 'c':
        return ComingSoon.sort((a,b) => parseFloat(b.expectation) - parseFloat(a.expectation)).slice(0,3)
    }
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Route path = '/movies' render={props => (
            <div className="container">
              <div className="side">
                <SideBar renderPage = {this.renderPage}/>
              </div>
              <div className="main">
                <Header />
                <SearchMovie searchMovie = {this.searchMovie}/>
                <Movies movies = {this.state.movies}/>
              </div>
            </div>
          )}/>

          <Route exact path='/' render={props =>(
            <div>
              <Home movies = {this.state.movies} renderPage={this.renderPage} getTopThree = {this.getTopThree}/>
            </div>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
