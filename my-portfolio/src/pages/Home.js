
import React, {Component } from "react"; 
import Navbar from '../components/Navbar'
import '../Assets/home.css';
import ItemCard from '../components/ItemCard'
import Footer from '../components/Footer'
import nacro from '../Assets/nacro.png';
import zuz from '../Assets/zuz.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';


class Home extends Component{
  render() {
      return(
      <div className="Home">
        <Navbar/>
        <br></br>
        <div id="intro">
          <h2>Hi I'm Megan </h2>
          <div id="description">
            <h4>I major in Information Systems and Human-Computer Interaction at Carneige Mellon University</h4 >
          </div>
        </div>
        <br></br>
        <Container>
              <Col sm="1" md="1" lg="1">
                <ItemCard image={nacro} title="NACRO" testvalue="nacro"/>
              </Col>
              <Col sm="1" md="1" lg="1">
                <ItemCard image={zuz} title="ZUZ" testvalue="zuz"/>
              </Col>
        </Container>
        <div class="projects">
          <ItemCard image={nacro} title="NACRO" testvalue="nacro"/>
          <ItemCard image={zuz} title="ZUZ" testvalue="zuz"/>
        </div>
        <Footer/>
      </div>
  );
  }
}

export default Home;