import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export function PageTitle({ text = '', heading = 'h1' }) {
  const Heading = `${heading}`;

  return (
    <section className="page-heading py-2">
      <Container>
        <Heading className="page-heading__title">{text}</Heading>
      </Container>
    </section>
  );
}

PageTitle.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  heading: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]),
}