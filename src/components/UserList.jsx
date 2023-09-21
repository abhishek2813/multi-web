import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function UserList({ user }) {
  return (
    <Card className="my-3">
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <b>Bio:-</b> {user.bio ? user.bio : "Not Available"}
        </Card.Text>
        <Row>
          <Col>
            <Card.Text>
              <b>Followers :-</b>
              {user.followers}
            </Card.Text>
          </Col>
          <Col>
            <Card.Text>
              <b>Following :-</b>
              {user.following}
            </Card.Text>
          </Col>
        </Row>
        <Card.Text>
          <b>company:-</b> {user.company ? user.company : "Not Available"}
        </Card.Text>
        <Button variant="primary" href={user.html_url}>
          Github View
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Creation Date {user.created_at}
      </Card.Footer>
    </Card>
  );
}

export default UserList;
