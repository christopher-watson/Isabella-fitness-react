import React from 'react';
import Modal from 'react-responsive-modal';
import API from "../../utils/API";

export default class DeleteModal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  deleteResponse = (p) => {
    console.log(p);
    API.deleteResponse(p)
  };

  render( ) {
    // console.log(this.props)
    const { open } = this.state;
    return (
      <div className="example">
        <button className="btn btn-danger mt-2" onClick={this.onOpenModal}>
          Delete
        </button>{' '}
        <Modal open={open} onClose={this.onCloseModal} center="true">
          <h4>Delete Response</h4>
          <p>Are you sure you want to delete this response?</p>
          <button className="btn btn-success offset-7" onClick={() => this.deleteResponse(this.props._id)} center="true">Yes</button>
          <button className="btn btn-primary ml-2" onClick={this.onCloseModal} center="true">Cancel</button>
        </Modal>
      </div>
    );
  }
}