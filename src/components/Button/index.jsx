import { Link } from "react-router-dom";
import { Button as BsButton } from "react-bootstrap";
import PropTypes from "prop-types";

export function Button({
  to,
  label,
  onClick,
  style = "primary",
  type = "button",
  children,
  withShadow,
  size = "md",
}) {
  function handleClick(e) {
    if (type !== "submit") {
      e.preventDefault();
      return onClick(e);
    }
  }

  return to ? (
    <Link
      className={`btn btn-${style} ${withShadow ? "--with-shadow" : ""} ${
        size !== "md" ? `btn-${size}` : ""
      }`}
      to={to}
      size={size}
    >
      {label ?? children}
    </Link>
  ) : (
    <BsButton
      onClick={handleClick}
      variant={style}
      className={withShadow ? "--with-shadow" : ""}
      type={type}
      size={size}
    >
      {label ?? children}
    </BsButton>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.oneOf(["primary", "light"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.any,
  withShadow: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
