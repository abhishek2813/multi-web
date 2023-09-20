import React, { useId } from "react";
import { Form, Row, Col } from "react-bootstrap";

function Input({
  label,
  currencyOptions = [],
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
//   console.warn(currencyOptions);
const amountInputId = useId()
  return (
    <div>
      <div className="shadow p-3 mb-5 bg-body rounded">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor={amountInputId}>{label}</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) =>
                  onAmountChange && onAmountChange(Number(e.target.value))
                }
                disabled={amountDisable}
                id={amountInputId}
              />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3">
              <Form.Label>Currency Type</Form.Label>
              <Form.Select
                onChange={(e) => {
                  const selectedCurrency = e.target.value;
                  onCurrencyChange && onCurrencyChange(selectedCurrency);
                  console.warn(selectedCurrency);
                }}
                value={selectCurrency}
                disabled={currencyDisable}
              >
                {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Input;
