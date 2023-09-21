import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Input from "../components/Input";
import useCurrency from "../hooks/useCurrency";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [convertAmount, setConvertAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  // console.warn(options);

  const handleConvert = () => {
    setConvertAmount(Number(amount * currencyInfo[to]));
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  return (
    <div className="bg-image p-5" id="currency">
      <Container className="mt-3 d-flex justify-content-center">
        <Row className="shadow-lg p-3 mb-5 bg-white rounded">
          <Col md={5}>
            <Input
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(curr) => setFrom(curr)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
            />
          </Col>
          <Col md={{ span: 2 }} className="my-3">
            <div className="shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
              <Button onClick={handleSwap}>Swap</Button>
            </div>
          </Col>
          <Col md={5}>
            <Input
              amount={convertAmount}
              label="To"
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisable
            />
          </Col>
          <Button onClick={handleConvert}>Convert</Button>
        </Row>
      </Container>
    </div>
  );
}

export default Currency;
