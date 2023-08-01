import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col } from "react-bootstrap";
import { materialInput } from "@/utils/materialInput";
import { listMonths } from "@/utils/dates";

export function CustomerInformation({user}) {
  const firstName = useRef();
  const middleName = useRef();
  const lastName = useRef();
  const ssn = useRef();

  useEffect(() => {
    if (user) {
      materialInput(firstName);
      materialInput(lastName);
      materialInput(middleName);
      materialInput(ssn);
    }
  }, [user]);

  function getMonths() {
    return listMonths().map((month, idx) => (
      <option key={`month-${idx + 1}`} value={idx + 1} selected={user && user.custInfo.DobM === (idx + 1)}>
        {month}
      </option>
    ));
  }

  function getDays() {
    return [...Array(31).keys()].map((day) => (
      <option key={`day-${day + 1}`} value={day + 1}  selected={user && user.custInfo.DobD === (day + 1)}>
        {day + 1}
      </option>
    ));
  }

  function getYears() {
    const currentYear = new Date().getFullYear();
    return [...Array(100).keys()].map((year) => (
      <option key={`year-${currentYear - year}`} value={currentYear - year}  selected={user && user.custInfo.DobY === (currentYear - year)}>
        {currentYear - year}
      </option>
    ));
  }

  return (
    <>
      <Row className="py-4">
        <Col xs={12} sm={6} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="First Name"
              ref={firstName}
              onKeyUp={() => materialInput(firstName)}
              required
              defaultValue={user ? user.custInfo.Fname : null}
            />
            <Form.Label>First Name</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Middle Name"
              ref={middleName}
              onKeyUp={() => materialInput(middleName)}
              defaultValue={user ? user.custInfo.Mname : null}
            />
            <Form.Label>Middle Name</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col xs={12} sm={6} className="mb-4 mb-sm-0">
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="Last Name"
              ref={lastName}
              onKeyUp={() => materialInput(lastName)}
              defaultValue={user ? user.custInfo.Lname : null}
              required
            />
            <Form.Label>Last Name</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="form-group--material">
            <Form.Control
              type="text"
              placeholder="SSN"
              ref={ssn}
              onKeyUp={() => materialInput(ssn)}
              defaultValue={user ? user.custInfo.ssn : null}
            />
            <Form.Label>SSN</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <Row className="align-items-center">
            <Col xs={12} md={3} className="text-md-end">
              <Form.Label className="m-md-0">Date of Birth:</Form.Label> 
            </Col>
            <Col xs={4} md={3}>
              <Form.Select aria-label="Month" defaultValue={user ? user.custInfo.DobM : 0}>
                <option value="0" disabled hidden>
                  Month
                </option>
                {getMonths()}
              </Form.Select>
            </Col>
            <Col xs={4} md={3}>
              <Form.Select aria-label="Day" defaultValue={user ? user.custInfo.DobD : 0}>
                <option value="0" disabled hidden>
                  Day
                </option>
                {getDays()}
              </Form.Select>
            </Col>
            <Col xs={4} md={3}>
              <Form.Select aria-label="Year" defaultValue={user ? user.custInfo.DobY : 0}>
                <option value="0" disabled hidden>
                  Year
                </option>
                {getYears()}
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

CustomerInformation.propTypes = {
  user: PropTypes.any
}