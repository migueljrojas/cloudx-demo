import { useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { materialInput } from "@/utils/materialInput";

export function EmploymentInformation() {
  const employer = useRef();
  const position = useRef();
  const employmentYears = useRef();
  const preEmployer = useRef();
  const prePosition = useRef();
  const preEmploymentYears = useRef();

  return (
    <>
      <Row className="py-4">
        <Col xs={12} sm={4} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Employer"
              ref={employer}
              onKeyUp={() => materialInput(employer)}
            />
            <Form.Label>Employer</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={4} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Position"
              ref={position}
              onKeyUp={() => materialInput(position)}
            />
            <Form.Label>Position</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={4}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Years Wroked"
              ref={employmentYears}
              onKeyUp={() => materialInput(employmentYears)}
            />
            <Form.Label>Years Wroked</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12} sm={4} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Previous Employer"
              ref={preEmployer}
              onKeyUp={() => materialInput(preEmployer)}
            />
            <Form.Label>Previous Employer</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={4} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Position"
              ref={prePosition}
              onKeyUp={() => materialInput(prePosition)}
            />
            <Form.Label>Position</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={4}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Years Wroked"
              ref={preEmploymentYears}
              onKeyUp={() => materialInput(preEmploymentYears)}
            />
            <Form.Label>Years Wroked</Form.Label>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}