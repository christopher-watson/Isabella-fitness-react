import React from 'react';
import Modal from 'react-responsive-modal';

export default class Centered extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="example">
        <button className="btn btn-danger mt-2" onClick={this.onOpenModal}>
          Delete
        </button>{' '}
        <Modal open={open} onClose={this.onCloseModal} center>
          <h4>Delete Response</h4>
          <p>Are you sure you want to delete this response?</p>
          <button className="btn btn-success offset-7" onClick={this.onCloseModal} center>Yes</button>
          <button className="btn btn-primary ml-2" onClick={this.onCloseModal} center>Cancel</button>
        </Modal>
      </div>
    );
  }
}