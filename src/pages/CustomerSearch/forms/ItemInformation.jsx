import { useRef } from "react";
import { Form, Row, Col, Stack } from "react-bootstrap";
import { Button } from "@/components";
import { materialInput } from "@/utils/materialInput";

export function ItemInformation() {
  const itemNumberInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <Form className="py-3" onSubmit={handleSubmit}>
      <Row className="justify-content-md-center mb-4">
        <Col xs={12} md={8}>
          <Form.Group>
            <Form.Select aria-label="Search a Manufacturer" defaultValue="0">
              <option value="0" hidden disabled>Search Manufacturer</option>
              <option value="1">Loren Ipsum Dolor</option>
              <option value="2">Manu Facturer</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={4} xl={3}>
          <Stack className="mb-3" direction="horizontal" gap={2}>
            <Form.Group className="form-group--material">
              <Form.Control
                type="number"
                placeholder="Item Number"
                onKeyUp={() => materialInput(itemNumberInput)}
                ref={itemNumberInput}
              />
              <Form.Label>Item Number</Form.Label>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
}