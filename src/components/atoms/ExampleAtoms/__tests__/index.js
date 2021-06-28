// Test ExampleAtoms Component
// --------------------------------------------------------

import React from 'react';
import ExampleAtoms from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
ExampleAtoms,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
