import PropTypes from "prop-types";
import { Accordion as BsAccordion } from "react-bootstrap";

export function Accordion({ data, id }) {
  return (
    <BsAccordion id={id}>
      {
        data.map((accordion, idx) => (
          <BsAccordion.Item key={`accordion-item-${idx}`} eventKey={idx}>
            <BsAccordion.Header>{accordion.label}</BsAccordion.Header>
            <BsAccordion.Body>{accordion.content}</BsAccordion.Body>
          </BsAccordion.Item>
        ))
      }
    </BsAccordion>
  );
}

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
      ])
    })
  ),
  id: PropTypes.string
}