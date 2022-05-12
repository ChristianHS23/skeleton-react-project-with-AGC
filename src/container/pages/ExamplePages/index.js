/* eslint-disable no-unused-vars */
// ExamplePages Component
// --------------------------------------------------------

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const ExamplePages = ({ propsName }) => {
  const [example, setExample] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${example} times`;
  });

  return <tag>Functional Component (Stateless Component)</tag>;
};

ExamplePages.propTypes = {
  propsName: PropTypes.string,
};

ExamplePages.defaultProps = {
  propsName: "",
};

export default ExamplePages;
