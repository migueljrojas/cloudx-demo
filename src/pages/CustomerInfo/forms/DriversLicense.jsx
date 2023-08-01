import { useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { materialInput } from "@/utils/materialInput";

export function DriversLicense() {
  const dlNumber = useRef();
  const dlExp = useRef();

  return (
    <Row className="py-4">
      <Col xs={12} sm={4} className="mb-4 mb-sm-0">
        <Form.Group>
          <Form.Select
            aria-label="State"
            defaultValue="0"
          >
            <option hidden disabled value="0">State</option>
            <option value="NY">New York</option>
            <option value="TX">Texas</option>
          </Form.Select>            
        </Form.Group>
      </Col>
      <Col xs={12} sm={4} className="mb-4 mb-sm-0">
        <Form.Group className="form-group--material">
          <Form.Control
            type="text"
            placeholder="DL Number"
            ref={dlNumber}
            onKeyUp={() => materialInput(dlNumber)}
          />
          <Form.Label>DL Number</Form.Label>
        </Form.Group>
      </Col>
      <Col xs={12} sm={4}>
        <Form.Group className="form-group--material">
          <Form.Control
            type="text"
            placeholder="DL Exp"
            ref={dlExp}
            onKeyUp={() => materialInput(dlExp)}
          />
          <Form.Label>DL Exp</Form.Label>
        </Form.Group>
      </Col>
    </Row>
  );
}