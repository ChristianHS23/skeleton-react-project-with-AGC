// Test ExampleMolecules Component
// --------------------------------------------------------

import React from 'react';
import ExampleMolecules from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
ExampleMolecules,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
