import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from './layout/Header'

class Home extends Component {
  state = {
    topNowPlaying : [],
    topComingSoon : [],
    topThisWeek : []
  }

  componentDidMount(){
    this.setState({topNowPlaying: this.props.getTopThree('p')})
    this.setState({topComingSoon: this.props.getTopThree('c')})
    this.setState({topThisWeek: this.props.getTopThree('w')})
  }
  render(){
    const topMovieItem = (part) => {
      return this.props.getTopThree(part).map((movie) => (
        <div key={movie.id} style={movieStyle}>
          <img width="100%" alt={movie.id} src={movie.poster_url}/>
        </div>
      ))
    }
    return (
      <div>
        <Header />
        <h1 style={{textAlign:'center', marginTop: '10px', color:'#5d737e'}}> Top Three Expectation! </h1>
        <div style={topThreeStyle}>
          <h2 style={{width: '80%', marginBottom: '8px'}}>Now Playing</h2>
          {topMovieItem('p')}
          <Link style={{marginLeft:'auto', order:2}} to={'/movies'} onClick={() =>this.props.renderPage('p')}> More Movies... </Link>
        </div>
        <div style={topThreeStyle}>
          <h2 style={{width: '80%', marginBottom: '8px'}}>Opening This Week</h2>
          {topMovieItem('w')}
          <Link style={{marginLeft:'auto', order:2}} to={'/movies'} onClick={() =>this.props.renderPage('w')}> More Movies... </Link>
        </div>
        <div style={topThreeStyle}>
          <h2 style={{width: '80%', marginBottom: '8px'}}>Coming Soon</h2>
          {topMovieItem('c')}
          <Link style={{marginLeft:'auto', order:2}} to={'/movies'} onClick={() =>this.props.renderPage('c')}> More Movies... </Link>
        </div>
      </div>
    )
  }
}

// PropTypes
Home.propTypes = {
  getTopThree: PropTypes.func.isRequired,
  renderPage: PropTypes.func.isRequired
}

const topThreeStyle = {
  margin: '20px 5%',
  padding: '25px 3%',
  display: 'flex',
  border: '2px solid #64B6AC',
  borderRadius: '8px',
  boxShadow: '10px 5px 5px #333',
  flexWrap: 'wrap',
  background: '#DAFFEF'
}

const movieStyle = {
  padding: '5px',
  width: '33%',
}


export default Home;
