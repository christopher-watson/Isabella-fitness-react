import React, {Component} from "react";
import Form from '../components/Form';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            <h1>Isabella Health</h1>
          </div>
        </div>
        <Form />
      </div>
    )
  }
}

export default Home;