import React, { Component } from 'react';
import { withRouter } from 'react-router';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle } from 'reactstrap';
import '../Assets/item_card.css';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

class ItemCard extends Component {

  render() {

    return (
    <div>
      <Link to={"/"+this.props.testvalue}>
        <Card className="bg-dark text-white border-0">
        <Card.Img src={this.props.image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{this.props.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </div>
    // <div>
    //   <Card className="card-style" onClick={this.props.clicked}>
    //     <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle >{this.props.title}</CardTitle>
    //       {/* <CardSubtitle>{this.props.price}</CardSubtitle> */}
    //       <CardText>{this.props.description}</CardText>
    //     </CardBody>
    //   </Card>
    // </div>
  //   <Card className="bg-dark text-white">
  //   <Card.Img src="holder.js/100px270" alt="Card image" />
  //   <Card.ImgOverlay>
  //     <Card.Title>Card title</Card.Title>
  //     <Card.Text>
  //       This is a wider card with supporting text below as a natural lead-in to
  //       additional content. This content is a little bit longer.
  //     </Card.Text>
  //     <Card.Text>Last updated 3 mins ago</Card.Text>
  //   </Card.ImgOverlay>
  // </Card>
    );
  }
}

export default ItemCard;