import React, { Component } from "react";
import logo from "./logo.svg";
import { Button, Card } from "react-bootstrap";

export default class Card1 extends Component {
  render() {
    let newName = this.props.name1;
    let newAge = this.props.price;
    let newImg = this.props.img;
    let nameFn = this.props.name;
    let key1 = this.props.key1;

    console.log(this.props);
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={newImg} />
          <Card.Body>
            <button onClick={() => nameFn("Boss", key1)}>test</button>
            <Card.Title>{newName}</Card.Title>
            <Card.Text>{newAge}$</Card.Text>
            <Button variant="primary">BuyNow</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
