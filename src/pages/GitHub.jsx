import React, { useState } from "react";
import GithubForm from "../components/GithubForm";
import UserList from "../components/UserList";
import { Col, Row } from "react-bootstrap";

function GitHub() {
  const [githubUser, setGithubUser] = useState("");
  const [users, setUsers] = useState(null);
  const handleFind = () => {
    fetch(`https://api.github.com/users/${githubUser}`)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  };
  console.log(users);
  return (
    <div>
      <Row className="my-3">
        <Col className="p-3 shadow-lg rounded" md={{ span: 10, offset: 1 }}>
          <GithubForm
            githubUser={githubUser}
            setGithubUser={setGithubUser}
            handleFind={handleFind}
          />
        </Col>
      </Row>
      <Row>
        {users && (
          <Col md={{span:4,offset:4}} key={users.id}>
            <UserList user={users} />
          </Col>
        )}
      </Row>
    </div>
  );
}

export default GitHub;
