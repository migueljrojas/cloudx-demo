import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Tab, Tabs, Stack, Form, Table } from "react-bootstrap";
import { PageTitle, Accordion, Button } from "@/components";
import {
  ContactInformation,
  CustomerInformation,
  DriversLicense,
  EmploymentInformation,
  HousingAndIncome,
  ReferenceInformation,
} from "./forms";
import { getUser } from "@/services/users.service";

export function CustomerInfo() {
  const [pageTitle, setPageTitle] = useState('');
  const [isNewCustomer, setIsNewCustomer] = useState(true);
  const [user, setUser] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userId = params.get('custId');
    const user = getUser(parseInt(userId));

    if (!user) {
      setPageTitle(() => 'New Customer');
      setIsNewCustomer(() => true);
      return;
    }

    setPageTitle(() => <>Customer Search: <span>{`${user.custInfo.Fname} ${user.custInfo.Lname}`}</span></>);
    setIsNewCustomer(() => false);
    setUser(user);
  }, [location]);

  const aplicantForm = [
    {
      label: "Customer Information",
      content: <CustomerInformation user={user} />,
    },
    {
      label: "Contact Information",
      content: <ContactInformation user={user} />,
    },
    {
      label: "Driver's License Information",
      content: <DriversLicense user={user} />,
    },
    {
      label: "Employment Information",
      content: <EmploymentInformation user={user} />,
    },
    {
      label: "Housing and Income",
      content: <HousingAndIncome user={user} />,
    },
    {
      label: "Reference Information",
      content: <ReferenceInformation user={user} />,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit')
  }

  function handleReset(e) {
    const { form } = e.target;
    const dirtyFormGroups = [...form.querySelectorAll('.--dirty')];
    
    dirtyFormGroups.forEach(formGroup => {
      formGroup.classList.remove('--dirty');
    });

    form.reset();
  }

  function getSales() {
    if (user) {
      return user.sales.map((sale, idx) => {
        return (
          <tr key={`sale-${idx}`}>
            <td>Sale {sale.id}</td>
            <td>{sale.date}</td>
            <td>
              <Link to={`/sale/Receipt?id=${sale.id}&type=1`}>
                Receipt #{sale.receiptNumber}
              </Link>
            </td>
            <td>
              <Link to={`/sale/note?id=${sale.id}`}>
                View Note
              </Link>
            </td>
            <td>
              {`${sale.status} `}
              <Link to={`/inventory/delivered?sale=${sale.id}`}>
                {`${sale.delived}/${sale.totalItems}`}
              </Link>
            </td>
            <td>
              <Button to="#" size="sm">
                Select
              </Button>
            </td>
          </tr>
        )
      })
    }
  }

  return (
    <>
      <PageTitle text={pageTitle} />
      <Container>
        <Row className="py-4">
          <Col>
            <Button to="/" style="light" withShadow>
              Back
            </Button>
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <Tabs defaultActiveKey="info" id="customer-info">
              <Tab
                className="py-3"
                eventKey="info"
                title="Applicant Information"
              >
                <Row className="justify-content-center">
                  <Form className="col" onSubmit={handleSubmit}>
                    <Tabs
                      defaultActiveKey="applicant"
                      id="applicant-info"
                      justify
                    >
                      <Tab
                        className="py-4 px-3"
                        eventKey="applicant"
                        title="Applicant"
                      >
                        <Accordion data={aplicantForm} />
                      </Tab>
                      <Tab
                        className="py-3"
                        eventKey="co-applicant"
                        title="Co-Applicant"
                        disabled
                      ></Tab>
                    </Tabs>                    
                    <Col>
                      <Stack
                        direction="horizontal"
                        className="justify-content-center flex-wrap"
                        gap={2}
                      >
                        <Button type="submit">Save Changes</Button>
                        <Button type="reset" onClick={handleReset}>Reset</Button>
                        <Button to="#">Resale Certificate</Button>
                      </Stack>
                    </Col>
                  </Form>
                </Row>
              </Tab>
              <Tab
                className="py-3"
                eventKey="sales"
                title="View All Sales"
                disabled={isNewCustomer}
              >
                <Table striped borderless responsive>
                  <thead>
                    <tr>
                      <th>Sale #</th>
                      <th>Date</th>
                      <th>Receipt Number</th>
                      <th>Sale Notes</th>
                      <th>Status</th>
                      <th>View Sale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getSales()}
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
}
