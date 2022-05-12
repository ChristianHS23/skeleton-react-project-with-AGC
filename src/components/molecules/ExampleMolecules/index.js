// ExampleMolecules Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const ExampleMolecules = ({ propsName }) => (
  <tag>Functional Component (Stateless Component)</tag>
);

ExampleMolecules.propTypes = {
  propsName: PropTypes.string,
};

ExampleMolecules.defaultProps = {
  propsName: "",
};

export default ExampleMolecules;
