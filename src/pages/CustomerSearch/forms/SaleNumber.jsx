import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Stack } from "react-bootstrap";
import { Button } from "@/components";
import { materialInput } from "@/utils/materialInput";
import { findUserBySaleId } from "@/services/users.service";

export function SaleNumber() {
  const saleNumberInput = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const userId = findUserBySaleId(parseInt(saleNumberInput.current.value));

    if (!userId) { return alert(`Sorry, this: [${saleNumberInput.current.value}] sale number doesn't exist`)}

    return navigate(`/customerInfo?custId=${userId}`);
  }

  return (
    <Form className="py-3" onSubmit={handleSubmit}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={4} xl={3}>
          <Stack className="mb-3" direction="horizontal" gap={2}>
            <Form.Group className="form-group--material">
              <Form.Control
                type="number"
                placeholder="Enter Sale Number"
                onKeyUp={() => materialInput(saleNumberInput)}
                ref={saleNumberInput}
              />
              <Form.Label>Enter Sale Number</Form.Label>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
}
