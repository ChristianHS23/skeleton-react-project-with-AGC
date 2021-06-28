// Test ExampleTemplates Component
// --------------------------------------------------------

import React from 'react';
import ExampleTemplates from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
ExampleTemplates,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
