import { useRef } from "react";
import { Form, Row, Col, Stack } from "react-bootstrap";
import { Button } from "@/components";
import { materialInput } from "@/utils/materialInput";

export function MerchantServiceTransaction() {
  const transactionInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <Form className="py-3" onSubmit={handleSubmit}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={4} xl={3}>
          <Stack className="mb-3" direction="horizontal" gap={2}>
          <Form.Group className="form-group--material">
              <Form.Control
                type="number"
                placeholder="Transaction #"
                onKeyUp={() => materialInput(transactionInput)}
                ref={transactionInput}
              />
              <Form.Label>Transaction #</Form.Label>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
}