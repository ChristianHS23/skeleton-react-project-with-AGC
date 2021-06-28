// Test ExamplePages Component
// --------------------------------------------------------

import React from 'react';
import ExamplePages from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
ExamplePages,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
