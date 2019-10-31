import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchMovie extends Component {
  state = {
    search:''
  }

  onChange = (e) => {
    this.setState({search: e.target.value})
    this.props.searchMovie(e.target.value)
  }

  render() {
    return (
      <form>
        <input type="text" name="search" placeholder="Search Movie..." style={inputStyle}
        value={this.state.search} onChange={this.onChange} />
      </form>
    );
  }

}

// PropTypes
SearchMovie.propTypes = {
  searchMovie: PropTypes.func.isRequired,
}

const inputStyle = {
  fontSize: '1.2em',
  width:'80%',
  height: '40px',
  padding:'5px',
  margin:'20px 10%',
  borderRadius: '3px'
}

export default SearchMovie;
