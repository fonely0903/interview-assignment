import React, {Component} from 'react';
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCalendarAlt, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

class SideBar extends Component {
  state = {
    page: 'p'
  }

  onClick = (str) => {
    this.setState({page:str})
    this.props.renderPage(str)
  }

  render() {
    return (
      <div>
        <button style={btnStyle} onClick={() => this.onClick('p')}> <FontAwesomeIcon icon={faPlay} /> <b>Now Playing</b> </button>
        <button style={btnStyle} onClick={() => this.onClick('w')}> <FontAwesomeIcon icon={faCalendarCheck} /> <b>Opening This Week</b> </button>
        <button style={btnStyle} onClick={() => this.onClick('c')}> <FontAwesomeIcon icon={faCalendarAlt} /> <b>Coming Soon</b> </button>
      </div>
    );
  }
}

// PropTypes
SideBar.propTypes = {
  renderPage: PropTypes.func.isRequired
}

const btnStyle = {
  color: '#fff',
  marginTop: '30px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  backgroundColor: 'Transparent'
}

export default SideBar;
