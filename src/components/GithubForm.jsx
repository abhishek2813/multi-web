import React from "react";
import { Form,Button, Col, Row } from "react-bootstrap";

function GithubForm({githubUser,setGithubUser,handleFind}) {
  return (
    <>
      <Row className="p-3">
        <Col md={11}>
          <Form.Label visuallyHidden>Add Todo</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setGithubUser(e.target.value)}
            value={githubUser}
            placeholder="Search By Username"
          />
        </Col>
        <Col md={1} className="">
          <Button onClick={handleFind} className="mb-2">
            Search
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default GithubForm;
