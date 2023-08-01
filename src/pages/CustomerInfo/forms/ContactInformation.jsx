import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col } from "react-bootstrap";
import { materialInput } from "@/utils/materialInput";

export function ContactInformation({ user }) {
  const address = useRef();
  const aptNumber = useRef();
  const aptName = useRef();
  const aptCode = useRef();
  const city = useRef();
  const zip = useRef();
  const email = useRef();

  useEffect(() => {
    if (user) {
      materialInput(address);
      materialInput(city);
      materialInput(zip);
    }
  }, [user]);

  return (
    <>
      <Row className="py-4">
        <Col xs={12}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Address"
              ref={address}
              onKeyUp={() => materialInput(address)}
              defaultValue={user ? user.custInfo.Address : null}
              required
            />
            <Form.Label>Address</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Apartment No."
              ref={aptNumber}
              onKeyUp={() => materialInput(aptNumber)}
            />
            <Form.Label>Apartment No.</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12} sm={6} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Apartment Name"
              ref={aptName}
              onKeyUp={() => materialInput(aptName)}
            />
            <Form.Label>Apartment Name</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Complex Security Code"
              ref={aptCode}
              onKeyUp={() => materialInput(aptCode)}
            />
            <Form.Label>Complex Security Code</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12} sm={4} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="City"
              ref={city}
              onKeyUp={() => materialInput(city)}
              defaultValue={user ? user.custInfo.City : null}
              required
            />
            <Form.Label>City</Form.Label>
          </Form.Group>
        </Col>
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
        <Col xs={12} sm={4}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Zip"
              ref={zip}
              onKeyUp={() => materialInput(zip)}
              defaultValue={user ? user.custInfo.Zip : null}
              required
            />
            <Form.Label>Zip</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="email"
              placeholder="Email"
              ref={email}
              onKeyUp={() => materialInput(email)}
            />
            <Form.Label>Email</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col md={6} lg={5}>
          <Row className="align-items-center">
            <Col xs={12} md={3} className="text-md-end">
              <Form.Label className="m-md-0"><i>*</i> Home Phone:</Form.Label> 
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" defaultValue={user ? user.custInfo.HPhone1 : null} />
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" defaultValue={user ? user.custInfo.HPhone2 : null} />
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" defaultValue={user ? user.custInfo.HPhone3 : null} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col md={6} lg={5}>
          <Row className="align-items-center">
            <Col xs={12} md={3} className="text-md-end">
              <Form.Label className="m-md-0">Work Phone:</Form.Label> 
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" />
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" />
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col md={6} lg={5}>
          <Row className="align-items-center">
            <Col xs={12} md={3} className="text-md-end">
              <Form.Label className="m-md-0">Cell Phone:</Form.Label> 
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" />
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" />
            </Col>
            <Col xs={4} md={3}>
              <Form.Control type="number" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

ContactInformation.propTypes = {
  user: PropTypes.any
}