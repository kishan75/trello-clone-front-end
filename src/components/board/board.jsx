import React from "react";
import { Card } from "react-bootstrap";

export default function Board() {
  return (
    <div>
      <Card bg="Info" style={{ width: "18rem" }} className="mb-2">
        <Card.Body>
          <Card.Title>Board Name</Card.Title>
          <Card.Text>description</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">age ram and +3 more</small>
        </Card.Footer>
      </Card>
    </div>
  );
}
