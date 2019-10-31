import React, { Component } from 'react';
import SeeMore from './SeeMore'
import PropTypes from 'prop-types'

class Movies extends Component {

  render() {
    const movieItems = this.props.movies.map((movie) => (
      <div key={movie.id} style={movieStyle}>
        <img width="100%" alt={movie.id} src={movie.poster_url}/>
        <h3>{movie.ch_name} | {movie.release_date}</h3>
        <h3> ({movie.eng_name}) </h3>
        <h3>Expectation: {movie.expectation}</h3>
        <SeeMore info = {movie}/>
      </div>
    ))
    return (
      <div>
        <div style={movieItemsStyle}>
          {movieItems}
        </div>
      </div>
    );
  }
}

const movieItemsStyle = {
  paddingLeft: '5%',
  paddingRight: '5%',
  display: 'flex',
  flexWrap: 'wrap'
}

const movieStyle = {
  padding: '5px',
  width: '25%',
  overflow: 'hidden'
}

// PropTypes
Movies.propTypes={
  movies: PropTypes.array.isRequired
}

export default Movies;
