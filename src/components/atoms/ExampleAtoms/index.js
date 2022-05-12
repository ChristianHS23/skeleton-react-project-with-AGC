// ExampleAtoms Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const ExampleAtoms = ({ propsName }) => (
  <tag>Functional Component (Stateless Component)</tag>
);

ExampleAtoms.propTypes = {
  propsName: PropTypes.string,
};

ExampleAtoms.defaultProps = {
  propsName: "",
};

export default ExampleAtoms;
