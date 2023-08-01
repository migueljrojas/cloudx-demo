import { useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { materialInput } from "@/utils/materialInput";

export function ReferenceInformation() {
  const lastName = useRef();
  const firstName = useRef();
  const phoneNumber = useRef();
  const relation = useRef();

  return (
    <>
      <Row className="py-4">
        <Col xs={12} sm={6} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Last Name"
              ref={lastName}
              onKeyUp={() => materialInput(lastName)}
            />
            <Form.Label>Last Name</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="First name"
              ref={firstName}
              onKeyUp={() => materialInput(firstName)}
            />
            <Form.Label>First name</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12} sm={6} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Phone Number"
              ref={phoneNumber}
              onKeyUp={() => materialInput(phoneNumber)}
            />
            <Form.Label>Phone Number</Form.Label>
          </Form.Group>
          <div className="form-text">Format: 123-456-7890</div>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Relation"
              ref={relation}
              onKeyUp={() => materialInput(relation)}
            />
            <Form.Label>Relation</Form.Label>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}