import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./ButtonGroup.css";

const ButtonGroup = ({ children, className, vertical, ...attrs }) => {
  const classes = classNames("btn-group", className, { vertical });

  const handleActive = (e) => {
    e.preventDefault();
    const buttons = Array.from(e.target.parentElement.children);

    // eslint-disable-next-line array-callback-return
    buttons.map((button) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      }
    });
    e.target.classList.add("active");
  };

  return (
    <div onClick={handleActive} className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default ButtonGroup;

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  children: null,
  className: "",
  vertical: false,
};
