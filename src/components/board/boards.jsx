import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Board from "./board";

export default class Boards extends Component {
  render() {
    return (
      <div>
        <br />
        <Navbar bg="light" fixed="top">
          <Button variant="success" size="lg" block>
            Create new Board
          </Button>
        </Navbar>
            <br />
            <br />
            <br/>
        <CardDeck>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board> <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board> <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
          <Board></Board>
        </CardDeck>
      </div>
    );
  }
}
