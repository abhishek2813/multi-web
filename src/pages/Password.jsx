import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Image,
  Form,
} from "react-bootstrap";
import img from "../assets/password.jpg";
function Password() {
  const [password, setPassword] = useState("Example");
  const [rangeValue, setRangeValue] = useState(8);
  const [special,setSpecial] = useState(false)
  const [number,setNumber] = useState(false)
  const [upperCase,setUpperCase] = useState(false);
  const [copy,setCopy] = useState(false);
  const inputRef = useRef(null)
  // generate password function using callback hook for memoize value
  const generatePassword = useCallback(()=>{
    setCopy(false)
      let chars = "abcdefghijklmnopqrstuvwxyz"
      const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const numberChars ="0123456789";
      const specialChars = "~`!@#$%^&*()_+=-/*-+{}|\?<>"
      let newPassword = "";
      if(upperCase){
         chars +=upperChars;
      }
       if(special){
        chars +=specialChars;
      }
       if(number){
        chars +=numberChars;
      }
      for(let i =0;i<rangeValue;i++){
        const randomIndex = Math.floor(Math.random()*chars.length)
        newPassword +=chars[randomIndex]
      }
      setPassword(newPassword)
  },[upperCase,special,number,rangeValue,setPassword])
  useEffect(()=>{
    generatePassword()
  },[generatePassword])

  //handle Copy function 
  const handleCopy=()=>{
  //  console.warn(inputRef.current.value);
   inputRef.current.select();
   const copied = navigator.clipboard.writeText(inputRef.current.value);
   setCopy(true)
  }
  return (
    <Container className="my-3">
      <Row>
        <Col xs={12} md={5} className="shadow-lg bg-white rounded">
          <Image src={img} rounded fluid width="100%"/>
        </Col>
        <Col xs={12} md={{span:5,offset:1}} className="shadow-lg bg-white rounded">
          <h1 className="text-center py-3">Generate Password</h1>
          <Card className="text-center my-3 p-3 border-1">
            <Card.Body>
              <Card.Title>Modify password according yours need</Card.Title>
              <Card.Text>
                <Row className="mb-3">
                  <Col xs="10" md={10}>
                    <Form.Control type="text" value={password} ref={inputRef} readOnly/>
                  </Col>
                  <Col xs="2">
                    <Button className="mb-2" variant={copy?"success":"primary"} onClick={handleCopy}>{copy?"Copied" :"Copy"}</Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} xs="auto">
                    <Form.Label>Length</Form.Label>
                    <Form.Range
                      min={8}
                      max={20}
                      id="range"
                      onChange={(e) => setRangeValue(e.target.value)}
                    />
                    {rangeValue}
                  </Col>
                  <Col md={3} xs="auto">
                    <Form.Label>Upper Case</Form.Label>
                    <Form.Check 
                      type="switch"
                      id="uppercase-switch"
                      onChange={(e) => setUpperCase(!upperCase)}
                      checked={upperCase}
                    />
                  </Col>
                  <Col md={3} xs="auto">
                    <Form.Label>Special</Form.Label>
                    <Form.Check 
                      type="switch"
                      id="Special-switch"
                      onChange={(e) => setSpecial(!special)}
                      checked={special}
                    />
                  </Col>
                  <Col md={2} xs="auto">
                    <Form.Label>Number</Form.Label>
                    <Form.Check 
                      type="switch"
                      id="number-switch"
                      onChange={(e) => setNumber(!number)}
                      checked={number}
                    />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Password;
