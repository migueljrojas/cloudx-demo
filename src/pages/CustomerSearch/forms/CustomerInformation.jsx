import { useRef } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "@/components";
import { materialInput } from "@/utils/materialInput";

export function CustomerInformation() {
  const firstName = useRef();
  const lastName = useRef();
  const ssn = useRef();
  const phone = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  function handleReset(e) {
    const { form } = e.target;
    const dirtyFormGroups = [...form.querySelectorAll('.--dirty')];
    
    dirtyFormGroups.forEach(formGroup => {
      formGroup.classList.remove('--dirty');
    });

    form.reset();
  }

  return (
    <Form className="py-3" onSubmit={handleSubmit}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form.Group className="mb-3 form-group--material">
            <Form.Control
              type="text"
              placeholder="First Name"
              ref={firstName}
              onKeyUp={() => materialInput(firstName)}
            />
            <Form.Label>First Name</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 form-group--material">
            <Form.Control
              type="text"
              placeholder="Last Name"
              ref={lastName}
              onKeyUp={() => materialInput(lastName)}
            />
            <Form.Label>Last Name</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 form-group--material">
            <Form.Control
              type="number"
              placeholder="SSN (ex. 00000000)"
              ref={ssn}
              onKeyUp={() => materialInput(ssn)}
            />
            <Form.Label>SSN (ex. 00000000)</Form.Label>
          </Form.Group>
          <Form.Group className="mb-4 form-group--material">
            <Form.Control
              type="tel"
              placeholder="Phone Number (ex. 9999999999)"
              ref={phone}
              onKeyUp={() => materialInput(phone)}
            />
            <Form.Label>Phone Number (ex. 9999999999)</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={6} md={3} className="text-end">
          <Button type="submit">Submit</Button>
        </Col>
        <Col xs={6} md={3}>
          <Button type="reset" onClick={handleReset}>Reset</Button>
        </Col>
      </Row>
    </Form>
  );
}