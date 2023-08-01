import { useRef } from "react";
import { Form, Row, Col, Stack } from "react-bootstrap";
import { materialInput } from "@/utils/materialInput";

export function HousingAndIncome() {
  const years = useRef();
  const income = useRef();
  const mortgage = useRef();
  const mortgageCompany = useRef();
  const homeValue = useRef();

  return (
    <>
      <Row className="py-4">
        <Col>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="# Years at current address"
              ref={years}
              onKeyUp={() => materialInput(years)}
            />
            <Form.Label># Years at current address</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12}>
          <Form.Group>
            <Form.Check
              type="radio"
              id="ownership"
              name="ownership"
              label="Own"
            />
          </Form.Group>
        </Col>
        <Col xs={12} className="mt-2">
          <Form.Group>
            <Form.Check
              type="radio"
              id="ownership"
              name="ownership"
              label="Rent"
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Stack direction="horizontal" gap={3}>
            <Form.Group style={{flexShrink: 0}}>
              <Form.Check
                type="radio"
                id="ownership"
                name="ownership"
                label="Board With:"
              />
            </Form.Group>
            <Form.Group className="w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Stack>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12} sm={6} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Monthly Income"
              ref={income}
              onKeyUp={() => materialInput(income)}
            />
            <Form.Label>Monthly Income</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Monthly Mortgage or Rent Payment"
              ref={mortgage}
              onKeyUp={() => materialInput(mortgage)}
            />
            <Form.Label>Monthly Mortgage or Rent Payment</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12} sm={6} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Mortgage Company"
              ref={mortgageCompany}
              onKeyUp={() => materialInput(mortgageCompany)}
            />
            <Form.Label>Mortgage Company</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Home Value"
              ref={homeValue}
              onKeyUp={() => materialInput(homeValue)}
            />
            <Form.Label>Home Value</Form.Label>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}