import React from 'react';
import Modal from 'react-responsive-modal';
import API from "../../utils/API";

export default class Form extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    open: false,
    nameInvalid: false,
    emailInvalid: false,
    phoneInvalid: false,
    messageInvalid: false,
    formInvalid: true,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    this.clearResponse();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
    this.validateForm();
  };

  submit = (e) => {
    e.preventDefault();
    API
      .sendEmail({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      })
      .catch(err => console.log(err.response.data))
    API
      .responseSubmit({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      })
      .catch(err => console.log(err.response.data))
    API
      .responseBackup({
        name: this.state.name,
        email:this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      })
      .catch(err => console.log(err.response.data));
    this.onOpenModal();
  };
  
  clearResponse = () =>{
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      open: false,
      formInvalid: true
    })
  }

  validateField = (fieldName, value) => {
    let nameInvalid = this.state.nameInvalid;
    let emailInvalid = this.state.emailInvalid;
    let phoneInvalid = this.state.phoneInvalid;
    let messageInvalid = this.state.messageInvalid;

    switch(fieldName) {
      case 'name':
        nameInvalid = value.match(/^\s*[a-zA-Z,\s]+\s*$/i);
        if(!nameInvalid){
          this.setState({ nameInvalid: true })
        }
        if(this.state.name === '' || nameInvalid){
          this.setState({ nameInvalid: false })
        }
        this.validateForm();
        break;
      case 'email':
        emailInvalid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if(!emailInvalid){
          this.setState({ emailInvalid: true })
        }
        if(this.state.email === '' || emailInvalid){
          this.setState({ emailInvalid: false })
        }
        this.validateForm();
        break;
      case 'phone':
        phoneInvalid = value.match(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i);
        if(!phoneInvalid){
          this.setState({ phoneInvalid: true })
        }
        if(this.state.phone === '' || phoneInvalid){
          this.setState({ phoneInvalid: false })
        }
        this.validateForm();
        break;
      case 'message':
        messageInvalid = value.length() > 1;
        if(!messageInvalid){
          this.setState({ messageInvalid: true })
        }
        if(this.state.message === '' || messageInvalid){
          this.setState({ messageInvalid: false })
        }
        this.validateForm();
        break;
        
      default:
        break;
    }
  }

  validateForm = () => { 
    if(this.state.name !== '' && this.state.email !== '' && this.state.phone !== '' && this.state.message !== ''){
      this.setState({ formInvalid: false })
    }
    else{
      this.setState({ formInvalid: true })
    }
  }

  render( ) {
    const { open } = this.state;
    return (
      <div className="container">
        <h3>Submit a Form</h3>
        <form>
          <div className="form-row">
            <div className="col-md-7 mb-3">
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Name"
                onBlur={() => this.validateField('name', this.state.name)}
                 />
              <small id="nameError" className="form-text text-danger">
                {this.state.nameInvalid ? 'Please enter a name' : ''}
              </small>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-7 mb-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                placeholder="555-555-5555"
                onBlur={() => this.validateField('phone', this.state.phone)}
                 />
              <small id="phoneError" className="form-text text-danger">
                {this.state.phoneInvalid ? 'Invalid Phone Number' : ''}
              </small>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-7 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Email"
                onBlur={() => this.validateField('email', this.state.email)}
                 />
              <small id="emailError" className="form-text text-danger">
                {this.state.emailInvalid ? 'Invalid Email Address' : ''}
              </small>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-7 mb-3">
              <label htmlFor="message">Message</label>
              <textarea 
                type="text"
                className="form-control" 
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
                rows="3">
              </textarea>
            </div>
          </div>
          
          <button
            className="btn btn-primary mt-2"
            id="contactInfoSubmit"
            type="button"
            disabled={this.state.formInvalid}
            onClick={this.submit}
          >Submit</button>
        </form>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h4>Submitted!</h4>
          <p>Your response has been recorded</p>
          <button 
            className="btn btn-success offset-7" 
            onClick={this.clearResponse} 
            center="true">Ok</button>
        </Modal>
      </div>
    );
  }
}