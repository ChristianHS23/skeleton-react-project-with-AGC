// Test ExampleOrganisms Component
// --------------------------------------------------------

import React from 'react';
import ExampleOrganisms from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
ExampleOrganisms,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
