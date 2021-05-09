
import React, {Component } from "react"; 
import Navbar from '../components/Navbar'
import nacro from '../Assets/nacro.png';
import profile from "../Assets/profile1.png"
import '../Assets/about.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/Footer'



class About extends Component{
  render() {
      return(
      <div className="About">
        <Navbar/>
        <h2>A little about myself </h2>
        <div class="content"> 
          <Container>
            <Row>
              <Col sm="1" md="5" lg="5">
              <div id="profile">
              <img src={profile} width="50"></img>
              </div>
              </Col>
              <Col id="description" sm="1" md="7" lg="7">
                <p>I am a sophomore in CMU majoring in Information Systems and Human-Computer Interaction. In my free time, I like to play piano and flute. Last summer I interned with Agot.AI as a growth intern, where I was responsible for web design and launch of the blog section of company's website. In the past, I worked on many technical projects such as developing a Movie Rating android app and a 2D platform game. One notable project I took part in is redesigning and implementing a website for an organization called NACRO. I had a first hand experience going through prototyping, client meetings, user testing, implementation, and finally presentation of our final product. Through these projects, I developed a passionate about designing and implementing tangible solutions. Currently, I am furthering interest by serving as a Carnegie Mellon's Human Interaction Institute to improve accessibility for autonomous vehicles and as a front-end developer for Develop for Good nonprofit organizations. </p>
              </Col>
            </Row>
          </Container>
          <Footer/>
        </div>
       
      </div>
  );
  }
}

export default About;