/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render ,fireEvent} from '@testing-library/react-native';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('check renderOutput', () => {
  console.warn(render(<App />))
  const { getByText } = render(<App />);
  const textElement = getByText('Jest Practice');
  expect(textElement).toBeTruthy();
});
test('renders Jest Practice text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Jest Practice');
  expect(textElement).toBeTruthy();
});


test('renders Jest second Practice text for case sensitivity', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/find/i);
  expect(textElement).toBeTruthy();
});
test('renders button with specific attributes', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText('Click Me');
  expect(buttonElement).toBeTruthy();
});
test('renders Jest Practice text', () => {
  const { getByTestId } = render(<App />);
  const textElement = getByTestId('jestText');
  expect(textElement).toBeTruthy();
  expect(textElement.props.children).toBe('Jest Check');
});
test('renders TextInput with specific placeholder', () => {
  const { getByPlaceholderText } = render(<App />);
  const textInputElement = getByPlaceholderText('Enter text here');
  expect(textInputElement).toBeTruthy();
});
test('TextInput changes value correctly', () => {
  const { getByPlaceholderText } = render(<App />);
  const textInputElement = getByPlaceholderText('Enter email here');

  fireEvent.changeText(textInputElement, 'test123@gmail.com');
  expect(textInputElement.props.value).toBe('test123@gmail.com');
});