import React, { Component } from "react";
import Card1 from "./Card.js";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export default class Input extends Component {
  state = {
    name: "",
    price: "",
    img: "",
    //-------- ถ้า [{},{}]
    item: [],
  };
  //----- คำถาม  ถ้าเรารับ event มาเหมือนกัน2 Input เขียนรวม ในsetState เดียวกันได้ไหมครับ
  inputName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  inputPrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };
  inputFile = (event) => {
    this.setState({
      img: event.target.value,
    });
    // console.log(this.state.img);
  };
  test = (name, index) => {
    let Newname = [...this.state.item];
    Newname.splice(index, 1, { ...Newname[index], name });

    this.setState({ item: Newname });
  };
  submit = () => {
    let newItem = [
      ...this.state.item,
      {
        name: this.state.name,
        price: this.state.price,
        img: this.state.img,
      },
    ];
    this.setState({ item: newItem, name: "", price: "", img: "" });
    console.log(this.state.item);
  };
  render() {
    return (
      <div>
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.inputName}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={this.inputPrice}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="URL IMG"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={this.inputFile}
                  value={this.state.img}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Select</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Button onClick={this.submit} variant="primary" block>
              Submit
            </Button>
          </Form>
        </Container>
        <Container>
          {this.state.item.map((ele, index) => (
            <Card1
              key={index}
              key1={index}
              className={index}
              name={this.test}
              name1={ele.name}
              price={ele.price}
              img={ele.img}
            >
              {console.log(index)}
            </Card1>
          ))}
        </Container>
      </div>
    );
  }
}
