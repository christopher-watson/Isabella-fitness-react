import React, { Component } from "react";
import Form from '../components/Form';
import API from "../utils/API";

class Home extends Component {
  state = {
    isLoggedIn: true,
    username: ""
  }

  componentDidMount() {
    this.loginCheck();
  }
  
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => {
        this.setState({ isLoggedIn: res.data.isLoggedIn, username: res.data.username })
      })
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
  }

  render() {
    return (
      <div className="body">
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            <h1>Isabella Health</h1>
          </div>
        </div>
        <p>
          Sit semper cum velit faucibus justo augue venenatis nec habitant pulvinar eleifend dignissim consectetur lacus diam morbi arcu dapibus libero fusce ac facilisi tristique vivamus imperdiet lorem elit porttitor consequat suscipit sociis dis hac urna purus pellentesque placerat fames tincidunt ultricies amet a nostra ad in torquent netus mi cursus dictum parturient curabitur per quis suspendisse sed risus sapien vehicula vel orci adipiscing scelerisque viverra lobortis magna hendrerit mattis neque aliquam gravida montes luctus fermentum eros bibendum eu nunc erat elementum duis nam quisque malesuada vulputate fringilla aenean tellus leo dolor sodales volutpat est phasellus ullamcorper varius mus enim ipsum penatibus donec ligula himenaeos commodo massa etiam felis tempor ultrices dui ridiculus platea metus ornare ante congue proin senectus cubilia nibh dictumst tempus et aptent euismod maecenas sociosqu interdum ut praesent molestie posuere odio sagittis litora class feugiat condimentum eget vestibulum tortor magnis id egestas blandit convallis primis conubia vitae cras nullam nascetur natoque at facilisis rutrum potenti sem accumsan iaculis nulla curae auctor pretium lectus mauris lacinia non habitasse integer nisi porta turpis laoreet inceptos pharetra mollis nisl sollicitudin rhoncus taciti aliquet quam lacinia odio tellus ligula cum lectus luctus leo etiam est dignissim donec nisi hac faucibus magna ipsum volutpat malesuada facilisi aptent venenatis enim tincidunt neque mi placerat morbi id duis penatibus laoreet sollicitudin egestas dictumst curae non in iaculis sed arcu inceptos senectus taciti nam sit eget augue ut litora at netus felis tempus cras hendrerit maecenas imperdiet lorem ad natoque convallis rhoncus nisl gravida ultrices tristique curabitur phasellus viverra diam conubia per posuere quam himenaeos auctor montes purus nullam a nostra mattis sem dolor orci sagittis sodales vulputate sociis aliquam turpis sapien vitae mus ante dui pretium bibendum mauris molestie magnis eros feugiat ridiculus sociosqu proin vehicula pulvinar ullamcorper adipiscing rutrum tempor platea ornare fusce Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum libero impedit inventore, suscipit ratione, explicabo cupiditate nesciunt laborum voluptatum atque perferendis animi dignissimos id aperiam. Quaerat aut exercitationem delectus nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur quae labore dicta explicabo odio quisquam, quo iure illum, aperiam laboriosam rerum nostrum eaque suscipit quam nisi qui reprehenderit voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ipsam placeat eveniet quas in labore sit, quis cupiditate id ullam soluta repudiandae quidem corporis, modi quia culpa sed, vel tempora earum veritatis fugit quisquam dicta eum. Dolore blanditiis, recusandae eos aliquid distinctio mollitia, excepturi incidunt sequi eligendi nulla saepe exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolore mollitia excepturi! Magni repellat nesciunt enim consectetur fugiat placeat sit, aperiam, ipsa voluptatibus voluptate ea omnis dignissimos ipsam cumque accusamus minima voluptatum magnam iste sint, aliquid excepturi fugit earum. Enim dolorum beatae itaque accusantium omnis alias. Impedit repudiandae laudantium vel id, autem officiis incidunt sequi vitae sunt reiciendis culpa nisi necessitatibus ullam voluptatibus minus minima. Ullam recusandae animi earum, possimus molestias a sequi ipsum enim aperiam, iste provident, nobis odio! Saepe beatae sint illo. Nemo, magni. Dignissimos, quasi ut. Placeat dignissimos nemo dicta velit, dolore aliquid incidunt sapiente aliquam labore quis nobis, possimus libero! Amet architecto libero illo deserunt quia adipisci, enim sapiente excepturi accusantium. Magnam deleniti inventore impedit, autem, perferendis harum, corporis quis placeat perspiciatis asperiores assumenda facere quas. Eveniet labore saepe ducimus optio corporis blanditiis! Tempora, fugit dignissimos impedit at possimus debitis fuga illum laudantium enim velit eos soluta laboriosam quas error eaque illo quod rem, quaerat, suscipit harum expedita. Modi, quo! Dignissimos molestias, suscipit, quae aliquid doloribus provident reprehenderit soluta quis reiciendis sapiente rerum commodi non. Exercitationem veniam ullam quia dolor porro. Unde placeat nisi pariatur enim maxime optio eligendi, delectus est velit, numquam deserunt. Quo, dolore?
        </p>
        <Form />
      </div>
    )
  }
}

export default Home;