import React, { Component } from 'react';
import './Bio.css'
import '../../fonts.css';
import bioImg from '../Images/ben.png'

export default class Bio2 extends Component {
  render() {
    return (
      <div className="inner-bio bio2">
        <div className="bio-pic">
          <img className="bio-img" src={bioImg} alt="Ben"/>
        </div>
        <div className="bio-text">
          <div className="bio-name">
            Ben Isabella
          </div>
          <div className="bio-title">
            The Boss 
          </div>
          <div className="bio-inner-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad repudiandae iste, delectus aut, 
            magnam ut consequatur enim aspernatur numquam, cumque incidunt maxime odit? Quod minima fugiat impedit odio perspiciatis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod mollitia quos repellat inventore, reprehenderit obcaecati? Possimus pariatur distinctio earum cum ea eveniet cupiditate aperiam consequuntur? Nesciunt nostrum minus saepe sint?
          </div>
          <div className="bio-certs">
            <div className="cert-title">Certifications</div>
            <ul>
              <li>BS, Exercise Sport Science</li>
              <li>BS, Exercise Sport Science</li>
              <li>BS, Exercise Sport Science</li>
              <li>BS, Exercise Sport Science</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
