import React from 'react';
import renderer from 'react-test-renderer'; 
import Greeting from '../src/Greeting';

describe('Greeting component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Greeting name="John" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
