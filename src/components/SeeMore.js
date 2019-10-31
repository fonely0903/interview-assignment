import React, { Component } from 'react';
import Modal from 'react-modal'
import PropTypes from 'prop-types'

class SeeMore extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount(){
    Modal.setAppElement('#modal')
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div id="modal">
        <a onClick={this.handleOpenModal} style={{float:'right'}}>See more...</a>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="See More..."
          onRequestClose={this.handleCloseModal}
          style = {modalStyle}
        >
          <h2 style={{borderBottom:' 1px solid #333'}}> Introduction </h2>
          <p style={{paddingTop:'15px', paddingBottom:'15px'}}>{this.props.info.intro}</p>
          <div style={{borderTop:' 1px solid #333'}}>
            <a
              href={this.props.info.trailer_url}
              style={this.props.info.trailer_url ? trailerBtn : {display:'none'}}
              target='__blank'>Watch the Trailer</a>
            <button onClick={this.handleCloseModal} style={closeBtn}>Close</button>
          </div>
        </Modal>
      </div>
    );
  }
}

const modalStyle = {
  content : {
    position: 'absolute',
    top: '50px',
    left: '25%',
    right: '25%',
    bottom: 'auto',
    maxHeight: '75%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

// PropTypes
SeeMore.propTypes = {
  info: PropTypes.object.isRequired
}

const trailerBtn = {
  marginTop: '10px',
  fontSize: '15px',
  border: 'none',
  borderRadius: '5px',
  background: '#64b6ac',
  color: '#fff',
  padding: '7px 20px',
  cursor: 'pointer',
  float: 'left',
}
const closeBtn = {
  marginTop: '10px',
  fontSize: '15px',
  border: 'none',
  borderRadius: '5px',
  background: '#5d737e',
  color: '#fff',
  padding: '7px 20px',
  cursor: 'pointer',
  float: 'right'
}

export default SeeMore;
