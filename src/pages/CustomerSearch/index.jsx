import { Container, Row, Col } from "react-bootstrap";
import { PageTitle, Accordion, Button } from "@/components";
import {
  CustomerInformation,
  ItemInformation,
  QuoteNumber,
  ReceiptNumber,
  SaleNumber,
  MerchantServiceTransaction,
} from "./forms";

const customerSearchForms = [
  {
    label: "Enter the customer information",
    content: <CustomerInformation />,
  },
  {
    label: "Enter Sale Number",
    content: <SaleNumber />,
  },
  {
    label: "Enter Receipt Number",
    content: <ReceiptNumber />,
  },
  {
    label: "Enter Quote Number",
    content: <QuoteNumber />,
  },
  {
    label: "Enter item information",
    content: <ItemInformation />,
  },
  {
    label: "Enter service transaction #",
    content: <MerchantServiceTransaction />,
  },
];

export function CustomerSearch() {
  return (
    <>
      <PageTitle text="Search Customer" />
      <Container>
        <Row className="py-3">
          <Col>
            <Accordion data={customerSearchForms} id="customer-search-forms" />
          </Col>
        </Row>
        <Row className="justify-content-center pb-3">
          <Col xs={12} sm={6} md={4} xxl={2} className="text-center">
            <Button to="/customerInfo">Enter New Client</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
