import React, { Component } from 'react';
import { withRouter } from 'react-router';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle } from 'reactstrap';
import '../Assets/item_card.css';
import instagram from '../Assets/instagram2.png'
import mail from '../Assets/mail.png'
import linkedin from '../Assets/linkedin1.png'

class Footer extends Component {

  render() {

    return (
    <div style={{padding:20}}>
      <h4>Let's connect </h4>
      <a href="https://www.instagram.com" target="_blank"><img src={instagram}  style={{width: 30, margin:10 }}></img></a>
      <a href="mailto:someone@yoursite.com?subject=Mail from Our Site"><img src={mail}  style={{width: 40, margin:10}}></img></a> 
      <a href="https://www.linkedin.com/in/megan-wei-tung-lin" target="_blank"><img src={linkedin}  style={{width: 35, margin:10}}></img></a>
    </div>
    );
  }
}

export default Footer;