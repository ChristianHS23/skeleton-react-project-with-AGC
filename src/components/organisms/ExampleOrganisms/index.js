// ExampleOrganisms Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ExampleOrganisms = ({ propsName }) => (
<tag>
  Functional Component (Stateless Component)
</tag>
);

ExampleOrganisms.propTypes = {
propsName: PropTypes.string,
};

ExampleOrganisms.defaultProps = {
propsName: '',
};

export default ExampleOrganisms;
